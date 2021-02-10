# PlatziStore

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Shorten your relative paths 🛣️
Consejo, para no escribir rutas relativas tan largas recomiendo acortarlas así:

**tsconfig.json**
```json
...
"compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@shared/*": ["src/app/shared/*"],
      "@core/*": ["src/app/core/*"]
    }
}
```
Entonces el resultado final a la hora de importarlo sería:
```typescript
import { CoreModule } from '@core/core.module';
```
```typescript
import { SharedModule } from '@shared/shared.module';
```

# Guía de instalaciones
Importante NUNCA USAR `sudo` para instalar sino vas a tener problemas más adelante con los permisos. Por las dudas te dejo comandos que usé para desinstalar npm. Mi consejo es NUNCA USAR `sudo`.

## Uninstall NPM

```bash
sudo apt-get remove nodejs
sudo apt-get remove npm
```

Then go to `/etc/apt/sources.list.d` and remove any node list if you have. Then do a
```bash
sudo apt-get update
```

**Check for any `.npm` or `.node` folder in your home folder and delete those.**

If you type

```bash
which node
```

you can see the location of the node. Try `which nodejs` and `which npm` too.

Source: https://stackoverflow.com/questions/32426601/how-can-i-completely-uninstall-nodejs-npm-and-node-in-ubuntu-14-04

## Install NPM

```bash
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs
```

Then restart wsl2: [windows 10 - WSL Ubuntu hangs, how to restart? - Stack Overflow](https://stackoverflow.com/questions/48407070/wsl-ubuntu-hangs-how-to-restart)

## NPM ver paquetes instalados

Lista de paquetes locales instalados:
```bash
npm ls --depth=0
```

Lista de paquetes globales instalados:

```bash
npm ls -g --depth=0
```

## Install Angular
```bash
npm install @angular/cli
```

## Install and setup Firebase in Angular
### Paso 1: Instalar angularfire con npm
```bash
npm install firebase @angular/fire --save
```

### Paso 2: configurar el proyecto
[Install and setup](https://github.com/angular/angularfire/blob/master/docs/install-and-setup.md)

## Firebase Hosting Deploy

**Paso 1:**

```bash
npm install firebase-tools
```

**Paso 2:**

```bash
npx firebase login
```

**Paso 3:**

```bash
npx firebase init
```

Nota/consejo: nunca usar sudo para esto.

## NPM Compatible version
```
npm version 7.5.2 detected.
The Angular CLI currently requires npm version 6.

Please install a compatible version to proceed (`npm install --global npm@6`).
```
