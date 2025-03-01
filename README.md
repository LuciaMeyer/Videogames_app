### ✔️ Video Games App
#### Individual Project - [Henry](https://www.soyhenry.com/?utm_source=google&utm_medium=cpc&utm_campaign=GADS_SEARCH_ARG_BRAND&utm_content=Brand&gad=1&gclid=Cj0KCQjwj_ajBhCqARIsAA37s0wwgGv6FdgDTWEdl9AWVSx5OBvqZd474QqlY6-8C8VvOroqUUuuSsgaAmWMEALw_wcB)

##### [Visitar el Sitio](https://appvideogames.up.railway.app/)

<a href="https://www.youtube.com/watch?v=eN4L032QNhw&feature=youtu.be" target="_BLANK"><img src="https://res.cloudinary.com/pflet/image/upload/v1685997746/Let/GitHub/Lu/pi_video_hdltju.png" alt="git" target="_BLANK"/></a> 

👉 Esta SPA (Single Page Application) la desarrollé como parte del cursado de la carrera de Full Stack Developer, en la etapa de Proyecto Individual. Es una aplicación web que consume datos de una API externa y consultas a la base de datos propia.

#### ⇢ Features:
- Paginado
- Filtros acumulativos
- Ordenamientos ascendentes y descendentes
- Sección con información detallada
- Búsqueda por nombre
- Formulario controlado para la creación de nuevos videojuegos
- Funcionalidad para modificar o eliminar los creados

#### ⇢ Tecnologías:
- Lenguaje: JavaScript
- Database: PostgreSQL
- Back-End: Node.js, Express.js, Sequelize
- Front-End: React, Redux, CSS puro
- Control de versiones: Git/GitHub

<hr/>

### ✔️ Devs

⇢ Setup:

- Tener instalado ```Node.js``` y ```PostgreSQL```
- Crear previamente una base de datos llamada ```videogames```
- crear archivo ```.env``` en la raiz de la carpeta /client con las siguientes variables:

```
 DB_USER= tu usuario de PostgreSQL
 DB_PASSWORD= tu contraseña de PostgreSQL
 DB_HOST=localhost
 apikey=tu apikey en https://rawg.io/apidocs
 apiGames='https://api.rawg.io/api/games?key='
 apiGenres='https://api.rawg.io/api/genres?key='
 apiGameByName= 'https://api.rawg.io/api/games?search='
 apiGameID= 'https://api.rawg.io/api/games/'
```


- Tener acceso a una terminal para seguir los siguientes pasos:
- dentro de la carpeta ```/client ⇢ npm install``` para instalar las dependencias y luego ```npm start``` para levantar el front en ```http://localhost:3000/```
- dentro de la carpeta ```/api ⇢ npm install``` para instalar las dependencias
- en el archivo ```/api/index.js``` linea 26 pasar el force a true y descomentar las funciones de las lineas 29 y 30
- dentro de la carpeta ```/api ⇢ npm start``` para levantar el back en ```http://localhost:3001/```
<hr/>
