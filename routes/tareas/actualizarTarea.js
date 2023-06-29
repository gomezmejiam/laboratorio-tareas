const Tareas = require('../../models/Tarea');
const express = require("express");

const router = express.Router();

// Actualizar una tarea
router.put('/:id', async (req, res) => {
    // Aquí iría la lógica para validar la solicitud...
    const tarea = await Tareas.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!tarea) return res.status(404).json({ message: 'Tarea no encontrada' });
    res.json(tarea);
});

module.exports = router;
