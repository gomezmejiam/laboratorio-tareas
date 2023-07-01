// Importa mongoose, que es una biblioteca de ODM (Object Data Modelling) para MongoDB y Node.js.
// Permite manejar las conexiones y modelar los datos de la base de datos MongoDB en una forma fácil de trabajar.
const mongoose = require('mongoose');

// Importa el método v4 del paquete 'uuid', que es utilizado para generar identificadores únicos universales (UUID).
const { v4: uuidv4 } = require('uuid');

// Define el esquema para el modelo 'Tarea' utilizando mongoose.Schema.
// Un esquema define la estructura de los documentos dentro de una colección en MongoDB.
const tareaSchema = new mongoose.Schema({
    // Define un campo 'id' que es una cadena y por defecto tiene un UUID generado.
    id: {
        type: String,
        default: uuidv4,
    },
    // Define un campo 'nombre' que es una cadena, es requerido y tiene una longitud máxima de 150 caracteres.
    nombre: {
        type: String,
        required: true,
        maxlength: 150,
    },
    // Define un campo 'fechaCreacion' que es una fecha y por defecto es la fecha y hora actuales.
    fechaCreacion: {
        type: Date,
        default: Date.now,
    },
    // Define un campo 'fechaLimite' que es una fecha y es requerido.
    fechaLimite: {
        type: Date,
        required: true,
    },
    // Define un campo 'estado' que es una cadena, y puede tener uno de los siguientes valores: 'creada', 'progreso', 'finalizada', 'declinada'.
    // Por defecto, el estado es 'creada'.
    estado: {
        type: String,
        enum: ['creada', 'progreso', 'finalizada', 'declinada'],
        default: 'creada',
    },
    // Define un campo 'tareaPadre' que es un identificador de objeto de mongoose.
    // Es una referencia a otro documento del modelo 'Tarea', que representa la tarea padre de esta tarea, en caso de que exista.
    tareaPadre: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tarea'
    },
    // Define un campo 'fechaInicio' que es una fecha.
    fechaInicio: Date,
    // Define un campo 'fechaFinalizacion' que es una fecha.
    fechaFinalizacion: Date,
    // Define un campo 'observacion' que es una cadena.
    observacion: String
});

// Exporta el modelo 'Tarea', que está construido utilizando el esquema 'tareaSchema'.
// Los modelos en mongoose representan las colecciones en MongoDB y se utilizan para crear y leer documentos de estas colecciones.
module.exports = mongoose.model('Tarea', tareaSchema);
