param(
  [string]$Ffmpeg = 'ffmpeg',
  [string]$FontDir = (Join-Path $PSScriptRoot 'fonts'),
  [string]$OutDir = $PSScriptRoot,
  [int]$Fps = 30,
  [switch]$Previews,
  [switch]$OgImage
)

$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing

$Copy = @{
  Label    = 'PARA QUEM QUER EMPREENDER'
  Hook     = @('Tem uma ideia', 'de app ou site', 'e não sabe', 'por onde começar?')
  HookSub  = 'A gente te mostra o caminho.'
  Solution = @('A Nexlorn tira sua', 'ideia do papel')
  Services = @('Sites que vendem', 'Apps iOS e Android', 'Sistemas sob medida', 'Automação com IA')
  SolSub   = 'Tudo em um só lugar, sem tecniquês.'
  Steps    = @('Da ideia ao lançamento', 'em 4 passos')
  StepList = @(
    @('01', 'Conversa inicial', 'Você conta a sua ideia'),
    @('02', 'Protótipo', 'Você vê antes de investir'),
    @('03', 'Desenvolvimento', 'Entregas frequentes'),
    @('04', 'Lançamento', 'No ar e nas lojas')
  )
  Cta      = @('Sua ideia merece', 'sair do papel.')
  Button   = 'Chame no WhatsApp'
  Phone    = '(11) 98183-5197'
  Site     = 'nexlorn.com.br'
}

$W = if ($OgImage) { 1200 } else { 1080 }
$H = if ($OgImage) { 630 } else { 1920 }
$Duration = 15.0
$C = @{
  Bg1 = '#060a17'; Bg2 = '#0b1224'; Blue = '#3b82ff'; Teal = '#14e0b4'
  Muted = '#a4afd1'; Ink = '#04101f'; Surface = '#0f1830'
}

$fonts = New-Object System.Drawing.Text.PrivateFontCollection
if (Test-Path $FontDir) { Get-ChildItem $FontDir -Filter *.ttf | ForEach-Object { $fonts.AddFontFile($_.FullName) } }

function New-FontSpec([string]$Name, [System.Drawing.FontStyle]$Style, [System.Drawing.FontStyle]$Fallback) {
  $family = $fonts.Families | Where-Object { $_.Name -eq $Name } | Select-Object -First 1
  if ($family -and $family.IsStyleAvailable($Style)) { return @{ Family = $family; Style = $Style } }
  @{ Family = New-Object System.Drawing.FontFamily 'Segoe UI'; Style = $Fallback }
}

$FHeading = New-FontSpec 'Poppins ExtraBold' Regular Bold
$FBold = New-FontSpec 'Poppins' Bold Bold
$FSemi = New-FontSpec 'Poppins SemiBold' Regular Bold
$FBody = New-FontSpec 'Inter Medium' Regular Regular
$FLabel = New-FontSpec 'Inter SemiBold' Regular Bold

function Clamp01([double]$X) { [Math]::Max(0.0, [Math]::Min(1.0, $X)) }
function Ease([double]$X) { $X = Clamp01 $X; 1 - [Math]::Pow(1 - $X, 3) }
function Prog([double]$T, [double]$Start, [double]$Dur = 0.55) { Ease (($T - $Start) / $Dur) }
function Fade([double]$T, [double]$In, [double]$Out) { [Math]::Min((Clamp01 (($T - $In) / 0.3)), (Clamp01 (($Out - $T) / 0.3))) }
function Pt([double]$X, [double]$Y) { New-Object System.Drawing.PointF ([single]$X), ([single]$Y) }

function Col([string]$Hex, [double]$Alpha = 1) {
  $c = [System.Drawing.ColorTranslator]::FromHtml($Hex)
  [System.Drawing.Color]::FromArgb([int](255 * (Clamp01 $Alpha)), $c)
}

function New-Gradient([double]$X1, [double]$Y1, [double]$X2, [double]$Y2, [double]$Alpha) {
  New-Object System.Drawing.Drawing2D.LinearGradientBrush (Pt $X1 $Y1), (Pt ($X2 + 0.5) ($Y2 + 0.5)), (Col $C.Blue $Alpha), (Col $C.Teal $Alpha)
}

function New-RoundRect([double]$X, [double]$Y, [double]$Wd, [double]$Ht, [double]$R) {
  $p = New-Object System.Drawing.Drawing2D.GraphicsPath
  $d = [Math]::Min(2 * $R, [Math]::Min($Wd, $Ht))
  $p.AddArc([single]$X, [single]$Y, [single]$d, [single]$d, 180, 90)
  $p.AddArc([single]($X + $Wd - $d), [single]$Y, [single]$d, [single]$d, 270, 90)
  $p.AddArc([single]($X + $Wd - $d), [single]($Y + $Ht - $d), [single]$d, [single]$d, 0, 90)
  $p.AddArc([single]$X, [single]($Y + $Ht - $d), [single]$d, [single]$d, 90, 90)
  $p.CloseFigure()
  $p
}

function New-TextPath([string]$Text, $Font, [double]$Size) {
  $p = New-Object System.Drawing.Drawing2D.GraphicsPath
  $p.AddString($Text, $Font.Family, [int]$Font.Style, [single]$Size, (Pt 0 0), [System.Drawing.StringFormat]::GenericTypographic)
  $p
}

function Get-Ascent($Font, [double]$Size) { $Font.Family.GetCellAscent($Font.Style) / $Font.Family.GetEmHeight($Font.Style) * $Size }

function Get-FitSize([string[]]$Texts, $Font, [double]$Size, [double]$MaxWidth = 940) {
  $widest = ($Texts | ForEach-Object { $p = New-TextPath $_ $Font $Size; $p.GetBounds().Width; $p.Dispose() } | Measure-Object -Maximum).Maximum
  [Math]::Min($Size, $Size * $MaxWidth / $widest)
}

function Draw-Text {
  param($G, [string]$Text, $Font, [double]$Size, [double]$Baseline, [double]$Alpha = 1, [string]$Color = '#ffffff',
    [switch]$Gradient, [double]$X = 540, [string]$Align = 'Center', [double]$MaxWidth = 940)
  if ($Alpha -le 0.004) { return }
  $p = New-TextPath $Text $Font $Size
  $b = $p.GetBounds()
  $k = [Math]::Min(1.0, $MaxWidth / $b.Width)
  $left = if ($Align -eq 'Center') { $X - $b.Width * $k / 2 } else { $X }
  $m = New-Object System.Drawing.Drawing2D.Matrix
  $m.Translate([single]$left, [single]$Baseline)
  $m.Scale([single]$k, [single]$k)
  $m.Translate([single](-$b.X), [single](-(Get-Ascent $Font $Size)))
  $p.Transform($m)
  $nb = $p.GetBounds()
  $brush = if ($Gradient) { New-Gradient $nb.Left 0 $nb.Right 0 $Alpha } else { New-Object System.Drawing.SolidBrush (Col $Color $Alpha) }
  $G.FillPath($brush, $p)
  $brush.Dispose(); $m.Dispose(); $p.Dispose()
}

function Draw-Glow($G, [double]$Cx, [double]$Cy, [double]$R, [string]$Hex, [double]$Alpha) {
  if ($Alpha -le 0.004) { return }
  $path = New-Object System.Drawing.Drawing2D.GraphicsPath
  $path.AddEllipse([single]($Cx - $R), [single]($Cy - $R), [single](2 * $R), [single](2 * $R))
  $brush = New-Object System.Drawing.Drawing2D.PathGradientBrush $path
  $brush.CenterColor = Col $Hex $Alpha
  $brush.SurroundColors = [System.Drawing.Color[]]@(Col $Hex 0)
  $blend = New-Object System.Drawing.Drawing2D.Blend 5
  $blend.Positions = [single[]]@(0, 0.15, 0.4, 0.7, 1)
  $blend.Factors = [single[]]@(0, 0.04, 0.2, 0.55, 1)
  $brush.Blend = $blend
  $G.FillPath($brush, $path)
  $brush.Dispose(); $path.Dispose()
}

function Draw-Logo($G, [double]$Cx, [double]$Cy, [double]$Size, [double]$Alpha) {
  if ($Alpha -le 0.004 -or $Size -le 1) { return }
  $x = $Cx - $Size / 2; $y = $Cy - $Size / 2; $s = $Size / 64
  $rr = New-RoundRect $x $y $Size $Size (18 * $s)
  $bg = New-Gradient $x $y ($x + $Size) ($y + $Size) $Alpha
  $G.FillPath($bg, $rr)
  $pts = [System.Drawing.PointF[]]@(@(18, 48), @(18, 16), @(27, 16), @(37.5, 32), @(37.5, 16), @(46, 16), @(46, 48), @(37, 48), @(26.5, 32), @(26.5, 48) |
      ForEach-Object { Pt ($x + $_[0] * $s) ($y + $_[1] * $s) })
  $ink = New-Object System.Drawing.SolidBrush (Col $C.Ink $Alpha)
  $G.FillPolygon($ink, $pts)
  $bg.Dispose(); $ink.Dispose(); $rr.Dispose()
}

function Draw-Wordmark($G, [double]$Cx, [double]$Baseline, [double]$Size, [double]$Alpha, [switch]$Logo) {
  if ($Alpha -le 0.004) { return }
  $full = New-TextPath 'Nexlorn' $FBold $Size
  $nex = New-TextPath 'Nex' $FBold $Size
  $bf = $full.GetBounds()
  $split = $nex.GetBounds().Right + $Size * 0.03
  $logoSize = if ($Logo) { $Size * 1.2 } else { 0 }
  $gap = if ($Logo) { $Size * 0.32 } else { 0 }
  $left = $Cx - ($logoSize + $gap + $bf.Width) / 2
  $tx = $left + $logoSize + $gap - $bf.X
  $m = New-Object System.Drawing.Drawing2D.Matrix
  $m.Translate([single]$tx, [single]($Baseline - (Get-Ascent $FBold $Size)))
  $full.Transform($m)
  $tb = $full.GetBounds()
  $splitX = $tx + $split
  $white = New-Object System.Drawing.SolidBrush (Col '#ffffff' $Alpha)
  $grad = New-Gradient $splitX 0 $tb.Right 0 $Alpha
  $state = $G.Save(); $G.SetClip((New-Object System.Drawing.RectangleF 0, 0, ([single]$splitX), $H)); $G.FillPath($white, $full); $G.Restore($state)
  $state = $G.Save(); $G.SetClip((New-Object System.Drawing.RectangleF ([single]$splitX), 0, ([single]($W - $splitX)), $H)); $G.FillPath($grad, $full); $G.Restore($state)
  if ($Logo) { Draw-Logo $G ($left + $logoSize / 2) ($tb.Y + $tb.Height / 2) $logoSize $Alpha }
  $white.Dispose(); $grad.Dispose(); $m.Dispose(); $full.Dispose(); $nex.Dispose()
}

function Draw-Pill($G, [double]$Cx, [double]$Cy, [string]$Text, [double]$Alpha, [double]$Size = 30) {
  if ($Alpha -le 0.004) { return }
  $p = New-TextPath $Text $FLabel $Size
  $b = $p.GetBounds()
  $pw = $b.Width + 64; $ph = $Size * 2
  $rr = New-RoundRect ($Cx - $pw / 2) ($Cy - $ph / 2) $pw $ph ($ph / 2)
  $fill = New-Object System.Drawing.SolidBrush (Col $C.Teal (0.12 * $Alpha))
  $pen = New-Object System.Drawing.Pen (Col $C.Teal (0.55 * $Alpha)), 2
  $G.FillPath($fill, $rr); $G.DrawPath($pen, $rr)
  $m = New-Object System.Drawing.Drawing2D.Matrix
  $m.Translate([single]($Cx - $b.Width / 2 - $b.X), [single]($Cy - $b.Height / 2 - $b.Y))
  $p.Transform($m)
  $tb = New-Object System.Drawing.SolidBrush (Col $C.Teal $Alpha)
  $G.FillPath($tb, $p)
  $fill.Dispose(); $pen.Dispose(); $tb.Dispose(); $m.Dispose(); $rr.Dispose(); $p.Dispose()
}

function Draw-Card($G, [double]$X, [double]$Y, [double]$Wd, [double]$Ht, [double]$R, [double]$Alpha) {
  if ($Alpha -le 0.004) { return }
  $path = New-RoundRect $X $Y $Wd $Ht $R
  $fill = New-Object System.Drawing.SolidBrush (Col $C.Surface (0.88 * $Alpha))
  $border = New-Gradient $X $Y ($X + $Wd) ($Y + $Ht) (0.75 * $Alpha)
  $pen = New-Object System.Drawing.Pen $border, 3
  $G.FillPath($fill, $path); $G.DrawPath($pen, $path)
  $fill.Dispose(); $border.Dispose(); $pen.Dispose(); $path.Dispose()
}

function Draw-Check($G, [double]$Cx, [double]$Cy, [double]$R, [double]$Alpha) {
  if ($Alpha -le 0.004) { return }
  $bg = New-Gradient ($Cx - $R) ($Cy - $R) ($Cx + $R) ($Cy + $R) $Alpha
  $G.FillEllipse($bg, [single]($Cx - $R), [single]($Cy - $R), [single](2 * $R), [single](2 * $R))
  $pen = New-Object System.Drawing.Pen (Col $C.Ink $Alpha), ([single]($R * 0.24))
  $pen.StartCap = 'Round'; $pen.EndCap = 'Round'; $pen.LineJoin = 'Round'
  $G.DrawLines($pen, [System.Drawing.PointF[]]@((Pt ($Cx - $R * 0.42) ($Cy + $R * 0.02)), (Pt ($Cx - $R * 0.1) ($Cy + $R * 0.34)), (Pt ($Cx + $R * 0.45) ($Cy - $R * 0.3))))
  $bg.Dispose(); $pen.Dispose()
}

function Draw-Number($G, [double]$Cx, [double]$Cy, [double]$R, [string]$Num, [double]$Alpha) {
  if ($Alpha -le 0.004) { return }
  $bg = New-Gradient ($Cx - $R) ($Cy - $R) ($Cx + $R) ($Cy + $R) $Alpha
  $G.FillEllipse($bg, [single]($Cx - $R), [single]($Cy - $R), [single](2 * $R), [single](2 * $R))
  Draw-Text $G $Num $FBold ($R * 0.8) ($Cy + $R * 0.29) $Alpha $C.Ink -X $Cx
  $bg.Dispose()
}

function New-Background {
  $bh = $H + 240
  $bmp = New-Object System.Drawing.Bitmap $W, $bh
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode = 'AntiAlias'
  $rect = New-Object System.Drawing.Rectangle 0, 0, $W, $bh
  $lg = New-Object System.Drawing.Drawing2D.LinearGradientBrush $rect, (Col $C.Bg1), (Col $C.Bg2), ([single]90)
  $g.FillRectangle($lg, $rect)
  $pen = New-Object System.Drawing.Pen (Col '#ffffff' 0.035), 1
  for ($x = 0; $x -le $W; $x += 72) { $g.DrawLine($pen, $x, 0, $x, $bh) }
  for ($y = 0; $y -le $bh; $y += 72) { $g.DrawLine($pen, 0, $y, $W, $y) }
  Draw-Glow $g 160 420 560 $C.Blue 0.42
  Draw-Glow $g 980 260 460 $C.Teal 0.30
  Draw-Glow $g 820 1560 600 $C.Blue 0.26
  Draw-Glow $g 120 1900 480 $C.Teal 0.22
  $vig = New-Object System.Drawing.Drawing2D.GraphicsPath
  $vig.AddEllipse(-520, -420, ($W + 1040), ($bh + 840))
  $vb = New-Object System.Drawing.Drawing2D.PathGradientBrush $vig
  $vb.CenterColor = Col $C.Bg1 0
  $vb.SurroundColors = [System.Drawing.Color[]]@(Col $C.Bg1 0.9)
  $g.FillPath($vb, $vig)
  $lg.Dispose(); $pen.Dispose(); $vb.Dispose(); $vig.Dispose(); $g.Dispose()
  $bmp
}

$rand = New-Object System.Random 7
$Particles = 1..24 | ForEach-Object {
  [pscustomobject]@{ X = $rand.NextDouble() * $W; Y = $rand.NextDouble() * $H; R = 2 + $rand.NextDouble() * 4; V = 25 + $rand.NextDouble() * 55; A = 0.15 + $rand.NextDouble() * 0.35; Hex = @($C.Blue, $C.Teal)[$rand.Next(2)] }
}

function Draw-Particles($G, [double]$T) {
  foreach ($p in $Particles) {
    $y = (($p.Y - $T * $p.V) % $H + $H) % $H
    $b = New-Object System.Drawing.SolidBrush (Col $p.Hex $p.A)
    $G.FillEllipse($b, [single]($p.X - $p.R), [single]($y - $p.R), [single](2 * $p.R), [single](2 * $p.R))
    $b.Dispose()
  }
}

$HookSize = Get-FitSize $Copy.Hook $FHeading 108
$SolSize = Get-FitSize $Copy.Solution $FHeading 90
$StepsSize = Get-FitSize $Copy.Steps $FHeading 86
$CtaSize = Get-FitSize $Copy.Cta $FHeading 84

function Scene-Hook($G, [double]$t, [double]$a) {
  Draw-Pill $G 540 330 $Copy.Label ($a * (Prog $t 0 0.5))
  $layout = @(@(600, 0.15), @(730, 0.45), @(900, 1.25), @(1030, 1.55))
  for ($i = 0; $i -lt 4; $i++) {
    $q = Prog $t $layout[$i][1] 0.6
    Draw-Text $G $Copy.Hook[$i] $FHeading $HookSize ($layout[$i][0] + (1 - $q) * 50) ($a * $q) -Gradient:($i -eq 3)
  }
  $u = Prog $t 2.1 0.7
  if ($u -gt 0) {
    $bw = 560 * $u
    $bar = New-RoundRect (540 - $bw / 2) 1092 ([Math]::Max($bw, 12)) 12 6
    $brush = New-Gradient (540 - $bw / 2) 0 (540 + $bw / 2) 0 $a
    $G.FillPath($brush, $bar)
    $brush.Dispose(); $bar.Dispose()
  }
  $q = Prog $t 2.7 0.6
  Draw-Text $G $Copy.HookSub $FBody 46 (1210 + (1 - $q) * 30) ($a * $q) $C.Muted
  $q = Prog $t 3.2 0.6
  Draw-Wordmark $G 540 (1400 + (1 - $q) * 30) 50 ($a * $q) -Logo
}

function Scene-Services($G, [double]$t, [double]$a) {
  $q = Prog $t 0 0.6
  Draw-Logo $G 540 (380 - (1 - $q) * 20) (120 * (0.7 + 0.3 * $q)) ($a * $q)
  $q = Prog $t 0.15 0.6
  Draw-Text $G $Copy.Solution[0] $FHeading $SolSize (600 + (1 - $q) * 40) ($a * $q)
  $q = Prog $t 0.35 0.6
  Draw-Text $G $Copy.Solution[1] $FHeading $SolSize (705 + (1 - $q) * 40) ($a * $q) -Gradient
  for ($i = 0; $i -lt $Copy.Services.Count; $i++) {
    $q = Prog $t (0.75 + $i * 0.22) 0.55
    $off = (1 - $q) * 90
    $y = 810 + $i * 148
    Draw-Card $G (120 + $off) $y 840 118 59 ($a * $q)
    Draw-Check $G (192 + $off) ($y + 59) 30 ($a * $q)
    Draw-Text $G $Copy.Services[$i] $FSemi 48 ($y + 76) ($a * $q) -X (252 + $off) -Align Left -MaxWidth 680
  }
  $q = Prog $t 1.9 0.6
  Draw-Text $G $Copy.SolSub $FBody 40 (1440 + (1 - $q) * 30) ($a * $q) $C.Muted
}

function Scene-Steps($G, [double]$t, [double]$a) {
  $q = Prog $t 0 0.6
  Draw-Text $G $Copy.Steps[0] $FHeading $StepsSize (470 + (1 - $q) * 40) ($a * $q)
  $q = Prog $t 0.15 0.6
  Draw-Text $G $Copy.Steps[1] $FHeading $StepsSize (575 + (1 - $q) * 40) ($a * $q) -Gradient
  $y0 = 730; $gapY = 175; $y3 = $y0 + 3 * $gapY
  $track = New-Object System.Drawing.Pen (Col '#ffffff' (0.08 * $a)), 6
  $G.DrawLine($track, 200, $y0, 200, $y3)
  $lp = Prog $t 0.45 1.6
  if ($lp -gt 0) {
    $fillPen = New-Object System.Drawing.Pen (New-Gradient 0 $y0 0 $y3 $a), 6
    $G.DrawLine($fillPen, 200, $y0, 200, [single]($y0 + ($y3 - $y0) * $lp))
    $fillPen.Dispose()
  }
  $track.Dispose()
  for ($i = 0; $i -lt 4; $i++) {
    $q = Prog $t (0.45 + $i * 0.4) 0.5
    $cy = $y0 + $i * $gapY
    $step = $Copy.StepList[$i]
    Draw-Number $G 200 $cy (46 * (0.6 + 0.4 * $q)) $step[0] ($a * $q)
    $tx = 284 + (1 - $q) * 40
    Draw-Text $G $step[1] $FSemi 50 ($cy - 4) ($a * $q) -X $tx -Align Left -MaxWidth 720
    Draw-Text $G $step[2] $FBody 36 ($cy + 44) ($a * $q) $C.Muted -X $tx -Align Left -MaxWidth 720
  }
}

function Scene-Cta($G, [double]$t, [double]$a) {
  $q = Prog $t 0 0.7
  Draw-Glow $G 540 520 340 $C.Teal (0.32 * $a * $q)
  Draw-Logo $G 540 520 (210 * (0.6 + 0.4 * $q)) ($a * $q)
  $q = Prog $t 0.25 0.6
  Draw-Wordmark $G 540 (770 + (1 - $q) * 30) 112 ($a * $q)
  $q = Prog $t 0.5 0.6
  Draw-Text $G $Copy.Cta[0] $FHeading $CtaSize (920 + (1 - $q) * 30) ($a * $q)
  Draw-Text $G $Copy.Cta[1] $FHeading $CtaSize (1015 + (1 - $q) * 30) ($a * $q) -Gradient
  $q = Prog $t 0.85 0.6
  if ($q -gt 0) {
    $pulse = if ($t -gt 1.45) { 1 + 0.03 * [Math]::Sin(($t - 1.45) * 2 * [Math]::PI * 1.1) } else { 1 }
    $bw = 780 * $pulse; $bh = 128 * $pulse; $cy = 1170 + (1 - $q) * 40
    $btn = New-RoundRect (540 - $bw / 2) ($cy - $bh / 2) $bw $bh ($bh / 2)
    $brush = New-Gradient (540 - $bw / 2) 0 (540 + $bw / 2) 0 ($a * $q)
    $G.FillPath($brush, $btn)
    $brush.Dispose(); $btn.Dispose()
    Draw-Text $G $Copy.Button $FBold (50 * $pulse) ($cy + 18 * $pulse) ($a * $q) $C.Ink
  }
  $q = Prog $t 1.1 0.6
  Draw-Text $G $Copy.Phone $FSemi 54 (1330 + (1 - $q) * 30) ($a * $q)
  $q = Prog $t 1.25 0.6
  Draw-Text $G $Copy.Site $FBody 40 (1400 + (1 - $q) * 30) ($a * $q) $C.Muted
}

function Render-OgImage($G) {
  $rect = New-Object System.Drawing.Rectangle 0, 0, $W, $H
  $lg = New-Object System.Drawing.Drawing2D.LinearGradientBrush $rect, (Col $C.Bg1), (Col $C.Bg2), ([single]90)
  $G.FillRectangle($lg, $rect)
  $pen = New-Object System.Drawing.Pen (Col '#ffffff' 0.025), 1
  for ($x = 0; $x -le $W; $x += 60) { $G.DrawLine($pen, $x, 0, $x, $H) }
  for ($y = 0; $y -le $H; $y += 60) { $G.DrawLine($pen, 0, $y, $W, $y) }
  Draw-Glow $G 120 40 460 $C.Blue 0.42
  Draw-Glow $G 1120 600 420 $C.Teal 0.30
  Draw-Glow $G 960 300 300 $C.Teal 0.28
  Draw-Logo $G 960 300 220 1

  $left = 80
  $wordSize = 46
  $word = New-TextPath 'Nexlorn' $FBold $wordSize
  $wordWidth = $word.GetBounds().Width
  $word.Dispose()
  Draw-Wordmark $G ($left + ($wordSize * 1.52 + $wordWidth) / 2) 130 $wordSize 1 -Logo

  $size = Get-FitSize @('Tem uma ideia de app ou site', 'e não sabe por onde começar?') $FHeading 58 720
  Draw-Text $G 'Tem uma ideia de app ou site' $FHeading $size 262 -X $left -Align Left -MaxWidth 720
  Draw-Text $G 'e não sabe por onde começar?' $FHeading $size 340 -Gradient -X $left -Align Left -MaxWidth 720
  Draw-Text $G 'Sites, apps, sistemas e automação com IA, da ideia ao lançamento.' $FBody 27 405 1 $C.Muted -X $left -Align Left -MaxWidth 720

  $x = $left
  foreach ($pill in 'Criação de Sites', 'Apps iOS e Android', 'Automação com IA') {
    $p = New-TextPath $pill $FLabel 22
    $pw = $p.GetBounds().Width + 64
    $p.Dispose()
    Draw-Pill $G ($x + $pw / 2) 490 $pill 1 22
    $x += $pw + 14
  }

  Draw-Text $G 'nexlorn.com.br' $FSemi 26 580 1 $C.Muted -X $left -Align Left
  $lg.Dispose(); $pen.Dispose()
}

if ($OgImage) {
  $bmp = New-Object System.Drawing.Bitmap $W, $H, ([System.Drawing.Imaging.PixelFormat]::Format24bppRgb)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode = 'AntiAlias'
  $g.PixelOffsetMode = 'HighQuality'
  $g.CompositingQuality = 'HighQuality'
  Render-OgImage $g
  New-Item -ItemType Directory -Force $OutDir | Out-Null
  $bmp.Save((Join-Path $OutDir 'og-image.png'), [System.Drawing.Imaging.ImageFormat]::Png)
  $g.Dispose(); $bmp.Dispose()
  Write-Host "og-image: $(Join-Path $OutDir 'og-image.png')"
  return
}

$Bg = New-Background

function Render-Frame($G, [double]$T) {
  $offset = [int](240 * $T / $Duration)
  $G.DrawImageUnscaled($Bg, 0, -$offset)
  Draw-Particles $G $T
  $a = Fade $T -1 5.15; if ($a -gt 0) { Scene-Hook $G $T $a }
  $a = Fade $T 4.85 9.15; if ($a -gt 0) { Scene-Services $G ($T - 4.85) $a }
  $a = Fade $T 8.85 12.15; if ($a -gt 0) { Scene-Steps $G ($T - 8.85) $a }
  $a = Fade $T 11.85 99; if ($a -gt 0) { Scene-Cta $G ($T - 11.85) $a }
}

$frames = [int]($Duration * $Fps)
New-Item -ItemType Directory -Force $OutDir | Out-Null
$bmp = New-Object System.Drawing.Bitmap $W, $H, ([System.Drawing.Imaging.PixelFormat]::Format24bppRgb)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = 'AntiAlias'
$g.PixelOffsetMode = 'HighQuality'
$g.CompositingQuality = 'HighQuality'

try {
  Render-Frame $g 4.4
  $bmp.Save((Join-Path $OutDir 'nexlorn-reels-capa.png'), [System.Drawing.Imaging.ImageFormat]::Png)

  if ($Previews) {
    foreach ($t in 1.2, 7.6, 11.0, 14.6) {
      Render-Frame $g $t
      $name = 'preview-{0}s.png' -f $t.ToString('00.0', [cultureinfo]::InvariantCulture)
      $bmp.Save((Join-Path $OutDir $name), [System.Drawing.Imaging.ImageFormat]::Png)
    }
    Write-Host "Prévias salvas em $OutDir"
    return
  }

  $out = Join-Path $OutDir 'nexlorn-reels.mp4'
  $psi = New-Object System.Diagnostics.ProcessStartInfo $Ffmpeg
  $psi.Arguments = "-y -hide_banner -loglevel error -f rawvideo -pix_fmt bgr24 -s ${W}x${H} -framerate $Fps -i - " +
    '-f lavfi -i anullsrc=channel_layout=stereo:sample_rate=44100 -shortest ' +
    '-c:v libx264 -preset slow -crf 18 -pix_fmt yuv420p -profile:v high ' +
    "-c:a aac -b:a 128k -movflags +faststart `"$out`""
  $psi.UseShellExecute = $false
  $psi.RedirectStandardInput = $true
  $proc = [System.Diagnostics.Process]::Start($psi)
  $stdin = $proc.StandardInput.BaseStream
  $rect = New-Object System.Drawing.Rectangle 0, 0, $W, $H
  $buffer = New-Object byte[] ($W * $H * 3)

  for ($i = 0; $i -lt $frames; $i++) {
    Render-Frame $g ($i / $Fps)
    $data = $bmp.LockBits($rect, 'ReadOnly', $bmp.PixelFormat)
    if ($data.Stride -ne $W * 3) { throw "Stride inesperado: $($data.Stride)" }
    [System.Runtime.InteropServices.Marshal]::Copy($data.Scan0, $buffer, 0, $buffer.Length)
    $bmp.UnlockBits($data)
    $stdin.Write($buffer, 0, $buffer.Length)
    if ($i % $Fps -eq 0) { Write-Host "quadro $i/$frames" }
  }

  $stdin.Close()
  $proc.WaitForExit()
  if ($proc.ExitCode -ne 0) { throw "ffmpeg falhou (código $($proc.ExitCode))" }
  Write-Host "Vídeo: $out"
}
finally {
  $g.Dispose(); $bmp.Dispose(); $Bg.Dispose()
}
