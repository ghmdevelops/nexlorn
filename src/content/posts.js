export const AUTHOR = { name: 'Equipe Nexlorn', role: 'Time de design, desenvolvimento e IA da Nexlorn' };

export const POSTS = [
  {
    slug: 'quanto-custa-criar-um-app',
    title: 'Quanto custa criar um app em 2026?',
    description:
      'Entenda o que define o preço de um aplicativo, as faixas de complexidade, os custos além do desenvolvimento e como investir menos começando por um MVP.',
    category: 'Aplicativos',
    published: '2026-10-06',
    updated: '2026-10-06',
    service: 'desenvolvimento-de-apps',
    summary:
      'O custo de um aplicativo depende principalmente do escopo (quantidade de telas e funcionalidades), das integrações e do back-end. Um MVP enxuto custa uma fração de um app completo, e começar por ele é a forma mais segura de investir. Além do desenvolvimento, considere as taxas das lojas, a hospedagem e a manutenção.',
    blocks: [
      { type: 'p', text: 'Essa é uma das primeiras perguntas de quem tem uma ideia de aplicativo, e a resposta honesta é: depende do que o app precisa fazer. Dois apps com a mesma "cara" podem ter custos muito diferentes por causa do que acontece por trás das telas. Neste guia, explicamos o que realmente pesa no orçamento e como investir com segurança.' },
      { type: 'h2', text: 'O que define o preço de um aplicativo' },
      {
        type: 'ul',
        items: [
          '**Quantidade de telas e fluxos:** cada tela precisa ser desenhada, desenvolvida e testada.',
          '**Funcionalidades:** login, pagamentos, chat, mapas, agenda e notificações aumentam a complexidade.',
          '**Back-end e painel administrativo:** servidor, banco de dados e um painel para gerenciar usuários, pedidos e conteúdos.',
          '**Integrações:** conexão com ERPs, CRMs, meios de pagamento e outros sistemas.',
          '**Design personalizado:** um app com identidade própria e boa experiência de uso exige trabalho de UX/UI.',
          '**Plataformas e tecnologia:** iOS, Android ou ambos, e se o app será nativo ou multiplataforma.',
        ],
      },
      { type: 'h2', text: 'Faixas de complexidade' },
      { type: 'p', text: 'Para ter uma referência, vale pensar o app em três níveis. Os prazos abaixo são aproximados e variam conforme o escopo:' },
      {
        type: 'table',
        head: ['Nível', 'Exemplos', 'O que costuma ter', 'Prazo típico'],
        rows: [
          ['MVP simples', 'Agendamento, catálogo, app interno', 'Poucas telas, login, painel simples', 'De semanas a poucos meses'],
          ['Intermediário', 'Delivery, clube de assinatura, marketplace pequeno', 'Pagamentos, notificações, painel completo e integrações', 'Alguns meses'],
          ['Complexo', 'Fintech, rede social, plataforma com IA', 'Alta escala, segurança reforçada e muitas integrações', 'Vários meses, com evolução contínua'],
        ],
      },
      { type: 'h2', text: 'Custos além do desenvolvimento' },
      {
        type: 'ul',
        items: [
          '**Conta de desenvolvedor da Apple:** US$ 99 por ano para publicar na App Store.',
          '**Conta de desenvolvedor do Google:** taxa única de US$ 25 para publicar no Google Play.',
          '**Hospedagem e serviços de nuvem:** variam conforme o número de usuários e o volume de dados.',
          '**Manutenção:** atualizações para novas versões do iOS e do Android, correções e melhorias. Uma referência comum de mercado é reservar de 15% a 20% do valor do desenvolvimento por ano.',
          '**Taxas das lojas:** vendas digitais dentro do app, como assinaturas, costumam ter comissão de 15% a 30%, conforme o programa de cada loja.',
        ],
      },
      { type: 'h2', text: 'Como gastar menos sem perder qualidade' },
      {
        type: 'ol',
        items: [
          '**Comece por um MVP:** lance só o essencial, aprenda com os usuários e invista no que realmente funciona.',
          '**Use tecnologia multiplataforma:** React Native ou Flutter permitem ter iOS e Android a partir de um só código.',
          '**Valide com um protótipo:** testar telas clicáveis com usuários evita desenvolver o que ninguém vai usar.',
          '**Priorize pelo impacto:** deixe para depois as funcionalidades "legais de ter".',
          '**Exija proposta fechada:** escopo, prazo e investimento claros evitam surpresas no meio do caminho.',
        ],
      },
      { type: 'h2', text: 'Quanto custa o seu app?' },
      { type: 'p', text: 'Cada projeto é único. Na Nexlorn, depois de uma conversa inicial, enviamos uma proposta fechada com escopo, prazo e investimento. Veja como funciona o nosso [desenvolvimento de apps](/desenvolvimento-de-apps/) ou [fale com a gente](#contato).' },
    ],
  },
  {
    slug: 'site-ou-app-qual-fazer-primeiro',
    title: 'Site ou app: qual fazer primeiro?',
    description:
      'Compare site e aplicativo em custo, prazo, visibilidade no Google e recursos do celular, e descubra qual faz mais sentido para começar o seu negócio digital.',
    category: 'Estratégia',
    published: '2026-10-06',
    updated: '2026-10-06',
    service: 'criacao-de-sites',
    summary:
      'Para a maioria dos negócios, o site vem primeiro: é mais rápido e barato de lançar, aparece no Google e funciona em qualquer aparelho sem instalação. O app faz sentido quando o cliente usa o serviço com frequência ou precisa de recursos do celular, como notificações, câmera ou GPS.',
    blocks: [
      { type: 'p', text: 'Muita gente começa a jornada digital querendo um aplicativo, mas nem sempre ele é o melhor primeiro passo. A escolha certa depende de como o seu cliente vai usar a solução e de quanto você quer investir para validar a ideia.' },
      { type: 'h2', text: 'Quando o site é a melhor escolha' },
      {
        type: 'ul',
        items: [
          'Você precisa ser **encontrado no Google** e nos assistentes de IA.',
          'O cliente usa o serviço de vez em quando, como para pedir um orçamento ou conhecer a empresa.',
          'Você quer **validar a ideia rápido** e com menor investimento.',
          'O objetivo principal é gerar contatos, vender produtos ou apresentar serviços.',
        ],
      },
      { type: 'h2', text: 'Quando vale a pena ter um app' },
      {
        type: 'ul',
        items: [
          'O cliente usa a solução **com frequência**, como um app de pedidos, treinos ou finanças.',
          'Você precisa de **notificações push** para engajar e trazer o usuário de volta.',
          'A solução usa recursos do celular, como câmera, GPS, biometria ou funcionamento offline.',
          'Estar na App Store e no Google Play faz parte da sua estratégia de marca.',
        ],
      },
      { type: 'h2', text: 'Comparativo rápido' },
      {
        type: 'table',
        head: ['Critério', 'Site', 'App'],
        rows: [
          ['Investimento inicial', 'Menor', 'Maior'],
          ['Prazo para lançar', 'Menor', 'Maior'],
          ['Aparece no Google', 'Sim', 'Indiretamente, pela página na loja'],
          ['Precisa instalar', 'Não', 'Sim'],
          ['Notificações push', 'Limitadas', 'Completas'],
          ['Recursos do celular', 'Parciais', 'Completos'],
          ['Atualizações', 'Instantâneas', 'Passam pela revisão das lojas'],
        ],
      },
      { type: 'h2', text: 'E o meio-termo? Conheça o PWA' },
      { type: 'p', text: 'O PWA (Progressive Web App) é um site que se comporta como aplicativo: pode ser adicionado à tela inicial, funciona parcialmente offline e, em muitos aparelhos, envia notificações. É uma ótima opção para testar a experiência de app com custo menor.' },
      { type: 'h2', text: 'Nossa recomendação' },
      { type: 'p', text: 'Se você está começando, lance um [site ou landing page](/criacao-de-sites/) para validar a demanda e captar clientes. Quando o uso recorrente aparecer, evolua para um [aplicativo](/desenvolvimento-de-apps/) com base no que os usuários realmente pedem. Ficou na dúvida? [Conte a sua ideia para a gente](#contato).' },
    ],
  },
  {
    slug: 'n8n-zapier-ou-make',
    title: 'n8n, Zapier ou Make: qual escolher para automatizar a sua empresa?',
    metaTitle: 'n8n, Zapier ou Make: qual escolher? | Nexlorn',
    description:
      'Comparamos n8n, Zapier e Make em facilidade, integrações, cobrança, hospedagem e uso com IA para você escolher a melhor ferramenta de automação.',
    category: 'Automação',
    published: '2026-10-06',
    updated: '2026-10-06',
    service: 'automacao-com-ia',
    summary:
      'O Zapier é o mais fácil e tem o maior catálogo de integrações, mas costuma ficar caro com volume alto. O Make oferece fluxos visuais avançados com bom custo-benefício. O n8n é o mais flexível: pode ser instalado em servidor próprio, aceita código quando necessário e é ótimo para automações com IA e alto volume.',
    blocks: [
      { type: 'p', text: 'Ferramentas de automação conectam os sistemas da sua empresa sem programar tudo do zero. As três mais conhecidas são n8n, Zapier e Make. Todas resolvem o problema, mas com propostas diferentes de facilidade, custo e controle.' },
      { type: 'h2', text: 'Comparativo geral' },
      {
        type: 'table',
        head: ['Critério', 'n8n', 'Zapier', 'Make'],
        rows: [
          ['Facilidade de uso', 'Intermediária', 'Muito fácil', 'Intermediária'],
          ['Integrações prontas', 'Centenas, mais qualquer API', 'O maior catálogo', 'Milhares'],
          ['Hospedagem própria', 'Sim', 'Não', 'Não'],
          ['Cobrança', 'Por execução do fluxo (ou servidor próprio)', 'Por tarefa executada', 'Por operação'],
          ['Flexibilidade técnica', 'Alta (código, APIs, IA)', 'Média', 'Média a alta'],
        ],
      },
      { type: 'callout', text: 'Preços, planos e limites dessas ferramentas mudam com frequência. Confira sempre as páginas oficiais antes de decidir.' },
      { type: 'h2', text: 'Quando escolher o Zapier' },
      {
        type: 'ul',
        items: [
          'Você quer começar rápido, sem apoio técnico.',
          'As automações são simples e com volume baixo.',
          'As ferramentas que você usa têm integração pronta com o Zapier.',
        ],
      },
      { type: 'h2', text: 'Quando escolher o Make' },
      {
        type: 'ul',
        items: [
          'Os fluxos têm várias etapas, condições e ramificações.',
          'Você quer um editor visual poderoso com bom custo por operação.',
          'O volume é médio e o time tem alguma familiaridade técnica.',
        ],
      },
      { type: 'h2', text: 'Quando escolher o n8n' },
      {
        type: 'ul',
        items: [
          'Você precisa de **controle sobre os dados**, com a opção de rodar em servidor próprio.',
          'O volume é alto e você quer **custo previsível**.',
          'As automações envolvem **IA, agentes** e APIs sem integração pronta.',
          'Você conta com apoio técnico para criar e manter os fluxos.',
        ],
      },
      { type: 'h2', text: 'Por que trabalhamos com n8n' },
      { type: 'p', text: 'Na Nexlorn, usamos o n8n em projetos de automação porque ele combina editor visual, código quando necessário, recursos nativos de IA e a possibilidade de hospedagem própria, o que ajuda em projetos que exigem atenção à LGPD. Ainda assim, a ferramenta certa depende do seu cenário.' },
      { type: 'p', text: 'Quer saber qual faz mais sentido para a sua empresa? Veja como funciona a nossa [automação com IA](/automacao-com-ia/) ou peça um [diagnóstico de automação](/automacao-para-empresas/).' },
    ],
  },
  {
    slug: 'como-validar-uma-ideia-antes-de-investir',
    title: 'Como validar uma ideia de app ou negócio antes de investir',
    metaTitle: 'Como validar uma ideia de app antes de investir | Nexlorn',
    description:
      'Passo a passo prático para validar a sua ideia com pouco investimento: entrevistas, landing page, protótipo e MVP, e os sinais de que ela está pronta.',
    category: 'Empreendedorismo',
    published: '2026-10-06',
    updated: '2026-10-06',
    service: 'desenvolvimento-de-apps',
    summary:
      'Validar é provar, com o menor custo possível, que existem pessoas com o problema e dispostas a pagar pela solução. Comece conversando com potenciais clientes, teste o interesse com uma landing page, mostre um protótipo e só então construa um MVP enxuto.',
    blocks: [
      { type: 'p', text: 'O maior risco de um novo produto não é técnico: é construir algo que ninguém quer. A boa notícia é que dá para reduzir muito esse risco antes de investir pesado em desenvolvimento.' },
      { type: 'h2', text: 'Passo a passo para validar a sua ideia' },
      { type: 'h3', text: '1. Defina o problema e o público' },
      { type: 'p', text: 'Descreva em uma frase qual problema você resolve e para quem. Quanto mais específico o público, mais fácil validar.' },
      { type: 'h3', text: '2. Converse com potenciais clientes' },
      { type: 'p', text: 'Faça entrevistas com pelo menos dez pessoas do seu público. Pergunte como elas resolvem o problema hoje, quanto isso custa e o que mais incomoda. Evite apresentar a sua solução logo de cara.' },
      { type: 'h3', text: '3. Pesquise as alternativas' },
      { type: 'p', text: 'Mapeie concorrentes e soluções improvisadas, como planilhas e grupos de WhatsApp. Se ninguém tenta resolver o problema, talvez ele não seja tão importante.' },
      { type: 'h3', text: '4. Teste o interesse com uma landing page' },
      { type: 'p', text: 'Crie uma página simples explicando a proposta, com uma chamada para lista de espera ou pré-venda. Divulgue para o seu público e meça quantas pessoas deixam o contato.' },
      { type: 'h3', text: '5. Mostre um protótipo' },
      { type: 'p', text: 'Um protótipo navegável permite que as pessoas "usem" o produto antes de ele existir. Observe onde elas se confundem e o que pedem.' },
      { type: 'h3', text: '6. Construa um MVP' },
      { type: 'p', text: 'Desenvolva só o essencial para entregar valor e coloque nas mãos de usuários reais. O objetivo é aprender rápido, não lançar a versão perfeita.' },
      { type: 'h3', text: '7. Meça e decida' },
      { type: 'p', text: 'Acompanhe cadastros, uso recorrente e disposição para pagar. Com dados na mão, decida se é hora de evoluir, ajustar ou mudar de direção.' },
      { type: 'h2', text: 'Sinais de que a ideia está validada' },
      {
        type: 'ul',
        items: [
          'As pessoas descrevem o problema sem você precisar sugerir.',
          'Há cadastros na lista de espera ou pré-vendas.',
          'Os usuários do MVP voltam a usar o produto sem você pedir.',
          'Alguém já pagou ou se comprometeu a pagar pela solução.',
        ],
      },
      { type: 'h2', text: 'Erros comuns' },
      {
        type: 'ul',
        items: [
          'Pedir opinião só para amigos e família.',
          'Desenvolver todas as funcionalidades antes de testar.',
          'Ignorar sinais negativos por apego à ideia.',
          'Não definir antes qual resultado conta como sucesso.',
        ],
      },
      { type: 'h2', text: 'Como a Nexlorn ajuda' },
      { type: 'p', text: 'Criamos a [landing page de validação](/criacao-de-sites/), o protótipo e o [MVP do seu app](/desenvolvimento-de-apps/), sempre começando pelo essencial. [Conte a sua ideia](#contato) e montamos o plano com você.' },
    ],
  },
];
