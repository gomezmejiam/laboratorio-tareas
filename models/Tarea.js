// models/Tarea.js
const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const tareaSchema = new mongoose.Schema({
    id: {
        type: String,
        default: uuidv4,
    },
    nombre: {
        type: String,
        required: true,
        maxlength: 150,
    },
    fechaCreacion: {
        type: Date,
        default: Date.now,
    },
    fechaLimite: {
        type: Date,
        required: true,
    },
    estado: {
        type: String,
        enum: ['creada', 'progreso', 'finalizada', 'declinada'],
        default: 'creada',
    },
    tareaPadre: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tarea'
    },
    fechaInicio: Date,
    fechaFinalizacion: Date,
    observacion: String
});

module.exports = mongoose.model('Tarea', tareaSchema);
