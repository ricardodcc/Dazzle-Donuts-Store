# Front-End Project

Projeto realizado para colocar em prática os conhecimentos adquiridos na parte de front-end, usando tecnologias como React, HTML, Sass, Js.

### Dependências Principais

- **React** (`^18.2.0`): Biblioteca de JavaScript para construir a interface.
- **React DOM** (`^18.2.0`): Biblioteca que fornece métodos específicos do DOM para a intereção entre o React e o DOM.
- **React Router DOM** (`^6.22.3`): Biblioteca para gerir as diversas rotas da aplicação desenvolvida.
- **Formik** (`^2.4.6`): Biblioteca para construção de formulários em React.
- **Yup** (`^1.4.0`): Biblioteca para validação de formulários JavaScript.
- **Sass** (`^1.72.0`): Preprocessador CSS.
- **Json-Server** (`^1.0.0-alpha.23`): Ferramenta para criar/SIMULAR uma API REST.

### Dependências de Desenvolvimento

- **Vite** (`^5.2.0`): O ambiente de desenvolvimento escolhido.
- **@vitejs/plugin-react** (`^4.2.1`): Plugin oficial do Vite para suportar o React.
- **ESLint** (`^8.57.0`): Ferramenta de linting para código JavaScript, utilizada para manter a qualidade do código.
- **eslint-plugin-react** (`^7.34.1`): Plugin ESLint específico para React.
- **eslint-plugin-react-hooks** (`^4.6.0`): Plugin ESLint para verificar as regras dos Hooks do React.
- **eslint-plugin-react-refresh** (`^0.4.6`): Plugin ESLint para verificar o React Refresh.
- **@types/react** (`^18.2.66`): Tipos TypeScript para React.
- **@types/react-dom** (`^18.2.22`): Tipos TypeScript para React DOM.

## Scripts Disponíveis

No projeto, você pode executar os seguintes scripts:

- `npm run dev`: Iniciar o servidor de desenvolvimento.
- `npm run build`: Compila o projeto para produção.
- `npm run preview`: Para visualizar a aplicação compilada.
- `npx json-server .\src\api\db.json`: Para fazer ligação ao base de dados fake para a API

## Instalação

Para instalar as dependências do projeto, execute o seguinte comando na pasta do projeto:

```bash
npm install
```

## Estrutura de pastas do projeto:

├── .vite
├── node_modules
├── public
│ └── images
├── src
│ ├── api
│ ├── assets
│ ├── components
│ ├── context
│ ├── hooks
│ ├── pages
│ ├── sass
│ │ ├── components
│ │ ├── sections
│ │ └── utils
│ │ └── main.scss
│ ├── App.jsx
│ ├── index.jsx
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.js

- src/api: Contém arquivos relacionados à comunicação com APIs.
- src/assets: Contém as imagens usadas no projeto.
- src/components: Contém os componentes reutilizáveis do React.
- src/context: Contém os contextos do React para gerir estados.
- src/hooks: Contém hooks personalizados do React, como é o caso do useContext.
- src/pages: Contém as páginas da aplicação.
- src/sass/components: Contém estilos para componentes específicos.
- src/sass/sections: Contém estilos para secções da página.
- src/sass/utils: Contém estilos utilitários, como variáveis e mixins.
- src/sass/utils/main.scss: Arquivo principal de estilos Sass.
- src/App.jsx: Componente principal da aplicação.
- src/index.jsx: onde tem todos os dados usados na aplicação, organizados em JSON.
