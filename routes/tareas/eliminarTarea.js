const Tareas = require('../../models/Tarea');
const express = require("express");

const router = express.Router();

// Eliminar una tarea
router.delete('/:id', async (req, res) => {
    const tarea = await Tareas.findByIdAndDelete(req.params.id);
    if (!tarea) return res.status(404).json({ message: 'Tarea no encontrada' });
    res.json({ message: 'Tarea eliminada' });
});

module.exports = router;
