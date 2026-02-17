# 🤝 Plataforma Social - Conectando Pessoas e Projetos

> Projeto final do curso Fullstack - Uma plataforma digital para conectar iniciativas sociais, voluntários e pessoas interessadas em gerar impacto positivo na sociedade.

![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![SCSS](https://img.shields.io/badge/SCSS-Modules-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-6.0-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)

---

## 📋 Sobre o Projeto

A **Plataforma Social** é uma aplicação web moderna desenvolvida com React.js que tem como objetivo:

- 🌍 Dar visibilidade a projetos sociais
- 📢 Apresentar informações claras e acessíveis
- ✨ Inspirar engajamento e transformação social
- 🤝 Facilitar a conexão entre voluntários, organizações e apoiadores
- 💙 Transmitir confiança, empatia e profissionalismo

---

## 🎨 Design

O design da aplicação foi desenvolvido no Figma seguindo princípios de UX/UI modernos:

🔗 **[Ver Design no Figma](https://www.figma.com/design/CwoQuNaBJRB3bwiAbUwuAr/Desafio-fim-de-ano-vini-e-jef?node-id=0-1&p=f)**

### Paleta de Cores

- **💙 Azul (#205691)** - Confiança e tecnologia
- **🧡 Laranja (#F87171)** - Impacto social e esperança
- **🤍 Branco (#FFFFFF)** - Simplicidade e acessibilidade
- **🟢 Verde (#4CAF50)** - Sucesso e confirmação

### Tipografia

- **Fonte Principal:** Source Sans 3 (Google Fonts)
- **Fonte Secundária:** Helvetica, Arial
- **Estilo:** Moderna, suave e de fácil leitura

---

## ✨ Funcionalidades

### 🏠 Página Inicial (Home)
- Hero section com call-to-action
- Estatísticas de impacto
- Apresentação da plataforma

### 💰 Doação
- Cards de projetos que aceitam doações
- Sistema de inscrição
- Feedback visual ao se inscrever

### 🙋 Voluntariado
- Oportunidades de voluntariado
- Inscrição em projetos
- Persistência de dados com localStorage

### 👨‍🏫 Mentoria
- Programas de mentoria disponíveis
- Áreas de atuação
- Sistema de participação

### 🎤 Eventos & Palestras
- Calendário de eventos
- Workshops e palestras
- Inscrição online

### 👤 Perfil do Usuário
- Foto de perfil circular com borda gradiente
- Informações pessoais (nome, bio, localização, email)
- Tags de interesse
- Status de voluntário ativo
- Data de membro

### 🎯 Sistema de Inscrição
- Badge "Inscrito com sucesso!" ao participar
- Estado persistente (localStorage)
- Mudança visual do botão após inscrição
- Animações suaves

---

## 🛠️ Tecnologias Utilizadas

### Core
- **React.js** (v18.3) - Biblioteca JavaScript para UI
- **Vite** - Build tool e dev server
- **React Router DOM** (v6) - Roteamento SPA

### Estilização
- **SCSS Modules** - Estilização modular e componentizada
- **CSS3** - Animações e transições
- **Flexbox & Grid** - Layout responsivo

### Armazenamento
- **LocalStorage** - Persistência de inscrições

---

## 📁 Estrutura do Projeto

```
plataforma-social/
├── public/
│   └── images/
│       ├── logo.png
│       └── cards/
│           ├── doacao/
│           ├── voluntariado/
│           ├── mentoria/
│           └── eventos-palestras/
│
├── src/
│   ├── assets/
│   │   └── styles/
│   │       ├── _variables.scss
│   │       └── _mixins.scss
│   │
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   └── header.module.scss
│   │   │
│   │   ├── Footer/
│   │   │   ├── Footer.jsx
│   │   │   └── footer.module.scss
│   │   │
│   │   ├── Card/
│   │   │   ├── Card.jsx
│   │   │   └── Card.module.scss
│   │   │
│   │   ├── Button/
│   │   │   ├── button.jsx
│   │   │   └── button.module.scss
│   │   │
│   │   └── Stats/
│   │       ├── StatsInfo.jsx
│   │       └── statsInfo.module.scss
│   │
│   ├── pages/
│   │   ├── Home/
│   │   ├── Doacao/
│   │   ├── Voluntariado/
│   │   ├── Mentoria/
│   │   ├── EventosEP/
│   │   └── Usuario/
│   │
│   ├── data/
│   │   ├── doacaoData.js
│   │   ├── voluntariadoData.js
│   │   ├── mentoriaData.js
│   │   └── eventosData.js
│   │
│   ├── App.jsx
│   └── main.jsx
│
└── package.json
```

---

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js (v16 ou superior)
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/plataforma-social.git

# Entre na pasta do projeto
cd plataforma-social

# Instale as dependências
npm install

# Execute o projeto em desenvolvimento
npm run dev
```

O projeto estará rodando em `http://localhost:5173`

### Build para Produção

```bash
# Gera build otimizado
npm run build

# Preview do build
npm run preview
```

---

## 📱 Responsividade

A aplicação é **totalmente responsiva** e foi desenvolvida com abordagem **mobile-first**:

### Breakpoints

- **Mobile:** < 768px (1 coluna)
- **Tablet:** 768px - 1024px (2 colunas)
- **Desktop:** > 1024px (3 colunas)

### Técnicas Utilizadas

- `%` - Larguras relativas
- `vh`, `vw` - Viewport units
- `rem` - Unidades escaláveis
- `max-width` - Limitação de largura
- **Media Queries** - Breakpoints responsivos
- **Flexbox & Grid** - Layouts flexíveis

---

## 🎯 Componentes Reutilizáveis

### Card Component
Componente genérico utilizado em todas as páginas de categorias:

```jsx
<Card 
  id="doacao-1"
  categoria="doacao"
  image="/images/projeto.jpg"
  title="Nome do Projeto"
  description="Descrição do projeto..."
  buttonText="Quero Doar"
/>
```

### Button Component
Botão customizável com variantes:

```jsx
<Button variant="primary">Texto</Button>
<Button variant="orange">Texto</Button>
<Button variant="outline">Texto</Button>
```

---

## 💾 Dados Mockados

Os dados da aplicação são **mockados** (simulados) em arquivos JavaScript, preparados para futura integração com API REST:

```javascript
// Estrutura de dados
{
  id: "unico-id",
  categoria: "voluntariado",
  image: "/caminho/imagem.jpg",
  title: "Título do Projeto",
  description: "Descrição detalhada...",
  buttonText: "Texto do Botão"
}
```

### Migração Futura para API

```javascript
// Atual (mockado)
import { doacaoData } from '../data/doacaoData';

// Futuro (com API)
const response = await fetch('/api/doacoes');
const doacaoData = await response.json();
```

---

## 🎨 Destaques Técnicos

### ✅ Boas Práticas Implementadas

- ✨ **Componentização** - Componentes reutilizáveis e modulares
- 🎯 **SCSS Modules** - Estilos escopados e organizados
- 🔄 **React Hooks** - useState para gerenciamento de estado
- 📦 **Separação de responsabilidades** - Dados separados da UI
- 🎭 **Animações CSS** - Transições suaves e profissionais
- 📱 **Mobile-first** - Design responsivo desde o início
- 🔐 **Persistência local** - localStorage para inscrições
- 🌐 **SPA** - Single Page Application com React Router

### ❌ Restrições Seguidas

- Sem frameworks CSS (Bootstrap, Tailwind)
- Sem bibliotecas de UI prontas
- Sem plugins externos de layout
- Estilização 100% manual com SCSS

---

## 🏆 Diferenciais Implementados

- ✅ Animações suaves com CSS
- ✅ Componentes altamente reutilizáveis
- ✅ Sistema completo de dados mockados
- ✅ Sistema de inscrição funcional
- ✅ Página de perfil do usuário
- ✅ Feedback visual (badges de sucesso)
- ✅ Persistência de dados local

---

## 🎓 Aprendizados

Este projeto me permitiu praticar e consolidar conhecimentos em:

- 🧩 **Componentização** - Criar componentes reutilizáveis e escaláveis
- 🎨 **SCSS Avançado** - Variáveis, mixins, aninhamento e módulos
- 🔀 **React Router** - Navegação SPA e organização de rotas
- 📊 **Estado e Props** - Gerenciamento de dados entre componentes
- 📱 **Design Responsivo** - Layouts adaptativos para todos dispositivos
- 🎯 **Organização de Código** - Estrutura de pastas e arquitetura
- 💾 **LocalStorage** - Persistência de dados no navegador
- 🎭 **Animações CSS** - Micro-interações e transições

---

## 🚧 Roadmap Futuro

### Fase 2 - Backend (Planejado)
- [ ] API REST com Node.js/Express
- [ ] Banco de dados MongoDB
- [ ] Sistema de autenticação JWT
- [ ] Upload de imagens

### Fase 3 - Features Avançadas
- [ ] Painel administrativo
- [ ] Sistema de pagamentos
- [ ] Notificações em tempo real
- [ ] Chat entre voluntários e organizações
- [ ] Sistema de avaliações

---

## 📄 Licença

Este projeto foi desenvolvido como projeto final do curso Fullstack e está sob a licença MIT.

---

## 👨‍💻 Professores

**Vinicius Bispo**

- GitHub: [@vinicius-bispo1](https://github.com/vinicius-bispo1)

**Jeferson Silva**

- Github: [@jefersonssant](https://github.com/jefersonssant)


---

## 🙏 Agradecimentos

- Ao curso Fullstack Javascript Vai Na Web pela oportunidade de aprendizado
- Aos professores Jeferson Silva e Vinícius Bispo pelo suporte e orientação
- À comunidade open-source pelas ferramentas incríveis

---

<div align="center">

### 💙 Conectar pessoas é transformar realidades

**Tecnologia com propósito • Desenvolvido com ❤️**

</div>