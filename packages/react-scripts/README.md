# danger-farms-react-scripts

In order to bootstrap a project using these scripts, run `npx create-react-app <app-name> --scripts-version danger-farms-react-scripts`.

To update the published version of `danger-farms-react-scripts`, increment the version number in the `package.json` file in the same
directory as this README, then, also within the same directory, run `npm publish`'.

Because Husky can only install git hooks once a repo has been initialised, the bootstrapped project will initially have
uncommitted changes to `package.json` and `yarn.lock` caused by installing Husky after `git init` has run. Please commit them.

This package includes scripts and configuration used by [Create React App](https://github.com/facebook/create-react-app).
It has been customised in order to bootstrap Danger Farms projects. These modifications include different implicit and
explicit dependencies, bespoke linting, Husky pre-commit hooks and a custom set up of Storybook.

The forked [repository containing this package](https://gitlab.com/dangerfarms/create-react-app) should be kept in sync with [the upstream repo](https://github.com/facebook/create-react-app).
[Here are instructions for syncing a fork](https://help.github.com/en/articles/syncing-a-fork).

Please refer to the original documentation:

- [Getting Started](https://facebook.github.io/create-react-app/docs/getting-started) – How to create a new app.
- [User Guide](https://facebook.github.io/create-react-app/) – How to develop apps bootstrapped with Create React App.
