// Importa Express, que es una biblioteca de Node.js utilizada para construir aplicaciones web.
const express = require('express');

// Importa un módulo local llamado 'cors', que es un middleware de Express que permite o restringe las solicitudes de origen cruzado.
const cors = require('../config/cors');
// Importa las rutas de tareas que hemos definido anteriormente en un router de Express.
const tareasRoutes = require('../routes/tarea');

// Crea una nueva aplicación Express.
const app = express();



// Añade el middleware de 'cors' y 'express.json()' a la aplicación.
// 'cors' permite o restringe las solicitudes de origen cruzado.
// 'express.json()' es un middleware incorporado en Express que analiza las solicitudes entrantes con cargas útiles JSON.
app.use(cors);
app.use(express.json());

// Añade las rutas de tareas a la aplicación.
// Cuando alguien haga una solicitud a la ruta raíz ('/') o cualquier ruta que comience con '/', estas solicitudes serán manejadas por 'tareasRoutes'.
app.use('/tarea', tareasRoutes); // Usar las rutas de tareas

// Define el puerto en el que la aplicación va a escuchar las solicitudes.
// Este puerto se toma del entorno, o si no está disponible, se usa el puerto 5000 por defecto.
const PORT = process.env.PORT || 5000;

// Inicia la aplicación en el puerto definido y muestra un mensaje en la consola una vez que la aplicación ha comenzado a escuchar solicitudes en ese puerto.
const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = server; // Asegúrate de exportar la aplicación
