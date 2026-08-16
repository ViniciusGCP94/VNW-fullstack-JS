# 🚀 GUI Orkut - Frontend

Uma aplicação web inspirada no Orkut desenvolvida como parte de um curso fullstack de JavaScript. Este é o frontend da aplicação que permite aos usuários se registrarem, fazerem login e interagirem com um feed de postagens.

## 📋 Tabela de Conteúdos

- [Requisitos](#requisitos)
- [Instalação](#instalação)
- [Uso](#uso)
- [Tecnologias](#tecnologias)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Funcionalidades](#funcionalidades)
- [API](#api)

## 🔧 Requisitos

- **Node.js**: v18.0.0 ou superior
- **npm** ou **yarn**: Gerenciador de pacotes
- **Backend**: API rodando em `http://localhost:3000`

## 📦 Instalação

1. **Clone o repositório:**
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd front-end-orkut
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente** (se necessário):
   - Atualize a URL base da API em `src/services/api.js` se necessário

## 🎯 Uso

### Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`.

### Build para Produção

Para gerar a build otimizada:

```bash
npm run build
```

### Preview da Build

Para visualizar a build de produção localmente:

```bash
npm run preview
```

### Linting

Para verificar a qualidade do código:

```bash
npm run lint
```

## 🛠️ Tecnologias

| Tecnologia | Descrição |
|-----------|-----------|
| **React 19** | Biblioteca para construção da interface |
| **Vite** | Ferramenta de build e desenvolvimento rápido |
| **React Router DOM** | Gerenciamento de rotas e navegação |
| **Axios** | Cliente HTTP para requisições à API |
| **Sass/SCSS** | Pré-processador CSS com estilos modulares |
| **ESLint** | Linting e qualidade do código |

## 📁 Estrutura do Projeto

```
front-end-orkut/
├── public/                     # Arquivos estáticos
├── src/
│   ├── components/             # Componentes reutilizáveis
│   │   └── post/
│   │       ├── Post.jsx
│   │       └── Post.module.scss
│   ├── context/                # Gerenciamento de estado global
│   │   ├── AuthContext.jsx
│   │   └── AuthProvider.jsx
│   ├── pages/                  # Páginas da aplicação
│   │   ├── home/
│   │   ├── login/
│   │   └── register/
│   ├── routes/
│   │   └── PrivateRoutes.jsx   # Rotas protegidas por autenticação
│   ├── services/
│   │   └── api.js              # Cliente Axios configurado
│   ├── styles/                 # Estilos globais
│   ├── App.jsx
│   └── main.jsx
├── vite.config.js
├── eslint.config.js
└── package.json
```

## ✨ Funcionalidades

### 🔐 Autenticação
- Registro de novos usuários
- Login com email e senha
- Logout com remoção de token
- Armazenamento seguro de token JWT
- Interceptor automático em requisições

### 📝 Gerenciamento de Postagens
- Visualização do feed de posts
- Criação de novas postagens
- Edição de postagens
- Exclusão de postagens
- Exibição de autor e data

### 🛡️ Segurança
- Proteção de rotas privadas
- Redirecionamento automático para login
- Token JWT em requisições autenticadas

## 🔌 API

A aplicação se comunica com um backend via requisições HTTP. O cliente está configurado em `src/services/api.js`.

### Endpoints Esperados

**Autenticação:**
- `POST /api/auth/register` - Registrar novo usuário
- `POST /api/auth/login` - Fazer login

**Postagens:**
- `GET /api/posts` - Listar todos os posts
- `POST /api/posts` - Criar novo post
- `PUT /api/posts/:id` - Editar post
- `DELETE /api/posts/:id` - Deletar post

## 🎨 Arquitetura

O projeto utiliza:
- **Context API** para gerenciamento global de autenticação
- **Sass Modules** para estilos isolados por componente
- **Interceptadores Axios** para adicionar token JWT automaticamente

## 🚀 Deploy

1. Gere a build de produção:
   ```bash
   npm run build
   ```

2. Faça upload da pasta `dist/` para seu servidor de hospedagem

3. Configure o servidor para servir o `index.html` para todas as rotas (SPA)

---

**Última atualização:** Maio de 2026
