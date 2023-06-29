const Tareas = require('../../models/Tarea');
const express = require("express");

const router = express.Router();

// Obtener una tarea específica
router.get('/:id', async (req, res) => {
    const tarea = await Tareas.findById(req.params.id);
    if (!tarea) return res.status(404).json({ message: 'Tarea no encontrada' });
    res.json(tarea);
});

module.exports = router;
