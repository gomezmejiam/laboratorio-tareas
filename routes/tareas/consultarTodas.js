const Tareas = require('../../models/Tarea');
const express = require("express");

const router = express.Router();

// Obtener todas las tareas
router.get('/', async (req, res) => {
    const tareas = await Tareas.find();
    res.json(tareas);
});

module.exports = router;
