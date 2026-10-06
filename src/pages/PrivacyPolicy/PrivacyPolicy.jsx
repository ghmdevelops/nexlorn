import { FiArrowLeft, FiMail } from 'react-icons/fi';
import './PrivacyPolicy.css';

const UPDATED_AT = '6 de outubro de 2026';

function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <header className="legal-header">
        <div className="container legal-header__inner">
          <a href="/" className="navbar__logo">
            <span className="navbar__logo-mark">N</span>
            <span className="navbar__logo-text">
              Nex<span className="gradient-text">lorn</span>
            </span>
          </a>
          <a href="/" className="legal-header__back">
            <FiArrowLeft /> Voltar para o site
          </a>
        </div>
      </header>

      <main className="section legal-content">
        <div className="container legal-content__inner">
          <span className="section-label">Documento legal</span>
          <h1>Política de Privacidade</h1>
          <p className="legal-content__updated">Última atualização: {UPDATED_AT}</p>

          <p>
            A Nexlorn respeita a sua privacidade e está comprometida em proteger os dados
            pessoais coletados através deste site, em conformidade com a Lei Geral de Proteção
            de Dados (LGPD - Lei nº 13.709/2018).
          </p>

          <h2>1. Quais dados coletamos</h2>
          <p>Coletamos os dados que você nos fornece voluntariamente através do formulário de contato:</p>
          <ul>
            <li>Nome completo</li>
            <li>E-mail</li>
            <li>Empresa (opcional)</li>
            <li>Telefone (opcional)</li>
            <li>Serviço de interesse e mensagem</li>
          </ul>
          <p>
            Também podemos coletar dados de navegação de forma automática, como cookies
            essenciais e, mediante seu consentimento, cookies analíticos que ajudam a entender
            como o site é utilizado.
          </p>

          <h2>2. Para que usamos os seus dados</h2>
          <ul>
            <li>Responder às suas solicitações de contato e orçamento;</li>
            <li>Enviar informações sobre nossos serviços quando solicitado;</li>
            <li>Melhorar a experiência de navegação e o desempenho do site;</li>
            <li>Cumprir obrigações legais e regulatórias.</li>
          </ul>

          <h2>3. Cookies</h2>
          <p>
            Utilizamos cookies essenciais, necessários para o funcionamento básico do site, e
            cookies analíticos opcionais, usados apenas com o seu consentimento, coletado através
            do banner de cookies exibido na primeira visita. Você pode alterar sua escolha a
            qualquer momento limpando os dados de navegação do seu navegador.
          </p>
          <p>
            Os cookies analíticos são do Google Analytics e só são ativados se você clicar em
            "Aceitar todos". Eles nos mostram, de forma agregada, quantas pessoas visitam o site,
            de onde vêm e quais páginas e botões de contato são mais usados.
          </p>

          <h2>4. Compartilhamento de dados</h2>
          <p>
            Não vendemos nem compartilhamos seus dados pessoais com terceiros para fins de
            marketing. Utilizamos o serviço EmailJS exclusivamente para processar o envio das
            mensagens do formulário de contato ao nosso time comercial e, com o seu consentimento,
            o Google Analytics para medir o uso do site.
          </p>

          <h2>5. Armazenamento e segurança</h2>
          <p>
            Adotamos medidas técnicas e organizacionais razoáveis para proteger seus dados
            pessoais contra acesso não autorizado, perda, alteração ou divulgação indevida.
          </p>

          <h2>6. Seus direitos</h2>
          <p>De acordo com a LGPD, você tem direito a:</p>
          <ul>
            <li>Confirmar a existência de tratamento dos seus dados;</li>
            <li>Acessar, corrigir ou solicitar a exclusão dos seus dados;</li>
            <li>Revogar o consentimento dado anteriormente;</li>
            <li>Solicitar a portabilidade dos seus dados a outro fornecedor.</li>
          </ul>

          <h2>7. Contato</h2>
          <p>
            Para exercer seus direitos ou tirar dúvidas sobre esta política, entre em contato
            conosco:
          </p>
          <p className="legal-content__contact">
            <FiMail /> <a href="mailto:contato@nexlorn.com">contato@nexlorn.com</a>
          </p>

          <h2>8. Alterações desta política</h2>
          <p>
            Esta política pode ser atualizada periodicamente para refletir mudanças em nossas
            práticas. Recomendamos que você a revise regularmente.
          </p>
        </div>
      </main>

      <footer className="legal-footer">
        <div className="container">
          <p suppressHydrationWarning>© {new Date().getFullYear()} Nexlorn. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default PrivacyPolicy;
