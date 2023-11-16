# Web Moto Candela

## Desarrollo local

Se recomienda la instalación de [nvm](https://github.com/nvm-sh/nvm) para el 
manejo de versiones de node. El proyecto utiliza __lts/hydrogen__.

Si se tiene instalado nvm, ejecutar estos comandos en la raíz del proyecto:

```sh
$ nvm install
$ nvm use
```

Para ejecutar la aplicación:

```sh
$ npm ci
$ npm run dev
```

La aplicación se ejecutará en `http://localhost:5173`

## Ejecución del backend de pruebas

```sh
cd backend
npm ci
node index.js
```

El backend de pruebas se ejecutará en `http://localhost:4000`

__Recuerde indicar las variables de entorno como se indica en .example.env__

## Recursos

* [Vite](https://vitejs.dev) - Bundler
* [Reactjs](https://react.dev) - Librería frontend
* [Material UI](https://mui.com/material-ui/getting-started/overview/) - Librería de estilos
* [Vercer](https://vercel.com) - Frontend deployment
* [Render](https://render.com/docs/deploy-node-express-app) - Backend service deployment