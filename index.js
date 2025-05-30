const express = require('express');

// Permite acceder a las variables de entorno declaradas en el archivo .env
require('dotenv').config();

// Permite el filtrado de peticiones
const cors = require('cors');

// const { dbConnection } = require('./database/config');

const app = express();

// dbConnection();

app.use( cors() );

// Directorio publico
app.use( express.static( 'public' ) );

// Lectura y parseo del body
app.use( express.json() );

// Rutas
// Asocio el Path que se usara con la localización interna.
app.use('/api/auth' ,  require('./src/routes/AuthRoutes') ) ;
app.use('/api/courses' , require('./src/routes/CourseRoutes') );

app.listen( process.env.PORT , () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
})