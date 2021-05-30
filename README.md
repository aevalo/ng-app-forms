# Prerequisites

Install NVM for installing Node and YVM for installing Yarn.

## Selecting Node version

Run `nvm use` in the project root directory. NVM will use .nvmrc file to pick up correct version of Node.

## Selecting Yarn version

Run `yvm use` in the project root directory. YVM will use .yvmrc file to pick up correct version of Yarn.

# Package commands

These are the most useful commands for the project

## Code scaffolding

Run `yarn ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `yarn ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running linter

Run `yarn lint` to run linter for code and tests.

## Development server

Run `yarn serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run `yarn serve:open` for a dev server, which is automatically opened in default browser. Otherwise same as `yarn serve`.

## Running tests

In this project, unit tests are implemented using Jest framework, and E2E tests are implemented using Cypress framework.

### Running unit tests

Run `yarn test` to run unit tests. The tests are implemented in Jest, and will be executed in console. Output will provide coverage summary.

### Running end-to-end tests

Run `yarn e2e` to run E2E tests in headless mode.

Run `yarn cypress:run` to run E2E tests in browser, without watching changes in sources.

Run `yarn cypress:open` to run E2E tests in browser, watching changes in sources.
