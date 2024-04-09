# ConsentApp

This is a project for managing consent-related functionalities.

## Description

ConsentApp provides tools for managing user consent within web applications. It includes functionality for tracking user consent, displaying consent forms, and handling user preferences regarding data usage.

## Node Version

This project requires Node.js version 16.17.0. You can use [nvm](https://github.com/nvm-sh/nvm) to manage multiple Node.js versions on your system.


## Installation

To install ConsentApp, follow these steps:

1. Clone the repository:
2. Navigate to the project directory:
```bash
cd consentApp
```

3. Make sure you are using the right node version:
```bash
nvm use
```

4. Install dependencies:
```bash
npm install
```

## Usage
### Development Build

To build the project for development, run the following command:
```bash
npm run build-dev
```

This command will generate a development build of the project using webpack.
### Production Build

To build the project for production, run the following command:
```bash
npm run build
```

This command will generate a production build of the project using webpack.

### Watching for Changes

To watch for changes and automatically rebuild the project, run the following command:

```bash
npm run watch
```

This command will start webpack in watch mode, monitoring for changes and rebuilding the project as needed.

## License

This project is licensed under the [ISC License](LICENSE).