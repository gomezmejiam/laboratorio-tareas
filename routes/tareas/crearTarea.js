const Tareas = require('../../models/Tarea');
const express = require("express");

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { nombre, fechaLimite, estado, tareaPadre } = req.body;

        // validar el nombre
        if (!nombre || nombre.length > 150) {
            return res.status(400).json({ error: "Nombre inválido" });
        }

        // validar la fecha límite
        const fechaLimiteDate = new Date(fechaLimite);
        if (isNaN(fechaLimiteDate) || fechaLimiteDate < new Date()) {
            return res.status(400).json({ error: "Fecha límite inválida" });
        }

        // validar el estado
        const estadosPermitidos = ['creada', 'progreso', 'finalizada', 'declinada'];
        if (estado && !estadosPermitidos.includes(estado)) {
            return res.status(400).json({ error: "Estado inválido" });
        }

        let tareaPadreObj = null;
        if (tareaPadre) {
            tareaPadreObj = await Tareas.findById(tareaPadre);
            if (!tareaPadreObj || !['creada', 'progreso'].includes(tareaPadreObj.estado)) {
                return res.status(400).json({ error: "Tarea padre no existe" });
            }
        }

        // crear la tarea
        const nuevaTarea = new Tareas({
            nombre,
            fechaLimite: fechaLimiteDate,
            estado: estado || 'creada',
            tareaPadre
        });

        const tareaGuardada = await nuevaTarea.save();
        res.status(201).json(tareaGuardada);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
