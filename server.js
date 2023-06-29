// server.js
const express = require('express');
const cors = require('cors');
const conectarDB = require('./config/db');
const tareasRoutes = require('./routes');

const app = express();

// Conectar a la base de datos
conectarDB();

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/', tareasRoutes); // Usar las rutas de tareas

// Aquí se pueden agregar las rutas

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
