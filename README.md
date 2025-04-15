# La Hora Template

## Inicializar la aplicación

1. configuración de variables de entorno se debe colocar dentro de un archivo `.env` en la raiz del proyecto, con el fin de definir la configuración global de los servicios Rest y la varición de algunos componentes customizables entre las diferentes paginas que tiene el proyecto, para setear tomar los valores del archivo .env.example.

2. Instalar las dependencias:

```bash
npm install
```

3. Correr el servidor:

```bash
npm run dev
```


## Configuración de tiempo

a travez de la aplicación existen varios componentes que requieren la configuración de tiempo de publicación de notas, para esto estamos utilizando [Day.js](https://day.js.org/en/), estos pueden ser configurados desde el siguiente archivo:

- [Archivo de configuracion](app/_setup/helpers/dateFormat.ts)

## Configuración de redes sociales

con esta configuración es posible definir las redes sociales que se mostraran en el proyecto, las cuales las podemos encontrar en el header y el footer.

- [Archivo de configuracion](app/_setup/config/client/social.ts)


## Configuración de card por seccion

esta configuración se realiza para definir que componente Card se debe mostrar segun la ruta de la seccion, para esto se creo un nuevo coponente que se puede setear manualmente para mostrar la card requerida.

- [Archivo de configuracion](app/_components/server-components/seccion/section.card.server.tsx)



## Configuración LANG para el proyecto

HTML lang es básicamente una etiqueta meta o meta tag que se encarga de indicar el idioma en el que está escrita una página. Su aplicación en el código es importante por varias razones: en primer lugar, facilita que los agentes muestren correctamente el contenido textual de un sitio web.

- [Archivo de configuracion](app/_setup/config/client/config.ts)

esta configuración es usada en los siguientes lugares:

- [Etiqueta HTML General](app/layout.tsx)
- [Configuracion Metadata General](app/_setup/config/client/metadata.ts)


## Configuración de pagina de ediciones

esta configuración define las rutas validas para la pagina de ediciones.

- [Archivo de configuracion](app/_setup/config/client/editions.ts)

## Configuración ambiente offline

se define mediante las siguientes variables de entorno:

```bash
# path de la version /offline
API_PATH_VERSION=/hit/5.0/1/offline
# ambiente local del desarrollador 
NEXT_PUBLIC_ENV= 'local'  # dev, offiline ...

# variables para el manejo del entorno offline
NEXT_PUBLIC_IS_OFFLINE=true
USERNAME_OFFLINE=previewreactsaas
PASSWORD_OFFLINE=Y35VhZGkFtwux
```

