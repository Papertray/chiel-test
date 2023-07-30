# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Usage

### Environment variables

The environment variables are in the repo in encrypted form. To decrypt them, you can either set the $DOTENV_PASS environment variable, create a .env.pass file or pass it when prompted by the scripts. You can get the latest encryption password by asking in the Discord channel. 

```bash
$ export DOTENV_PASS="your_encryption_password_here"
$ ./decrypt.sh
```

when updating the script, you can encrypt the variables again by running:

```bash
$ export DOTENV_PASS="your_encryption_password_here"
$ ./encrypt.sh
```

or run either script directly and input the password when prompted.
