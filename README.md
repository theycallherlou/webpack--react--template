# webpack--react--template

This is a boilerplate template for setting up a React project using Webpack, Babel, ESLint, Prettier, and Jest.

This template provides a clean and organized structure to kickstart your React project, written in JavaScript.

## Features

- **React**: Frontend library for building user interfaces.
- **Webpack**: Module bundler for efficient builds and hot module reloading.
- **Babel**: JavaScript compiler to ensure compatibility across different browsers.
- **ESLint**: Linter to maintain code quality and enforce consistent coding styles.
- **Prettier**: Code formatter to automatically format your code.
- **Jest**: Testing framework for writing unit tests.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/theycallherlou/webpack--react--template.git
   cd webpack--react--template
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

## Scripts

- **Start the development server**:

  ```bash
  npm dev
  ```

  Runs the development server.

- **Build the production bundle**:

  ```bash
  npm run build
  ```

  Build the project in the `dist/` directory, for production.

- **Lint the code**:

  ```bash
  npm run lint
  ```

  Lints the code using ESLint.

- **Run tests**:

  ```bash
  npm test
  ```

  Runs unit tests using Jest.

## Folder Structure

```bash
.
├── src
│   ├── components
│   ├── App.js
│   └── index.js
├── public
│   └── index.html
├── .gitignore
├── .prettierrc
├── babel.config.cjs
├── eslint.config.js
├── jest.config.js
├── jsconfig.json
├── package.json
├── webpack.config.js
└── README.md
```

## License

This project is licensed under the MIT License.
