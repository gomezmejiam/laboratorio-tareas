// Importa Express, que es una biblioteca de Node.js utilizada para construir aplicaciones web.
const express = require('express');
// Importa las rutas de tareas que hemos definido anteriormente en un router de Express.
const tareasRoutes = require('../routes/tarea');

// Crea una nueva aplicación Express.
const app = express();

app.use(express.json());

app.use('/tarea', tareasRoutes); // Usar las rutas de tareas
const server = app.listen( () => console.log(`Server running on test mode`));
module.exports = server; // Asegúrate de exportar la aplicación
