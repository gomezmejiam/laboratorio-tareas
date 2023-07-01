require('dotenv').config();
const mongoose = require('mongoose');

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

//const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/?retryWrites=true&w=majority`;
const uri = "mongodb+srv://diplomado:AqnLEAPAiWGmMJZv@cluster0.b0ohwyi.mongodb.net/diplomado?retryWrites=true&w=majority";


const conectarDB = async () => {
    try {
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Conexión exitosa a MongoDB');
    } catch (err) {
        console.log('Error al conectar a MongoDB: ', err);
        process.exit(1); // detiene la aplicación en caso de error
    }
};

module.exports = conectarDB;