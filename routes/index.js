// routes/index.js
const express = require('express');
const obtenerTodasRoutes = require('./tareas/consultarTodas');
const obtenerPorIdRoutes = require('./tareas/obtenerPorId');
const crearTareaRoutes = require('./tareas/crearTarea');
const actualizarTareaRoutes = require('./tareas/actualizarTarea');
const eliminarTareaRoutes = require('./tareas/eliminarTarea');

const router = express.Router();
router.use('/tareas', obtenerPorIdRoutes);
router.use('/tareas', crearTareaRoutes);
router.use('/tareas', actualizarTareaRoutes);
router.use('/tareas', eliminarTareaRoutes);
router.use('/tareas', obtenerTodasRoutes);
module.exports = router;
