// Requiere el paquete 'dotenv' que se utiliza para cargar variables de entorno desde un archivo .env a process.env
require('dotenv').config();

// Importa mongoose, que es una biblioteca de ODM (Object Data Modelling) para MongoDB y Node.js.
// Permite manejar las conexiones y modelar los datos de la base de datos MongoDB en una forma fácil de trabajar.
const mongoose = require('mongoose');

// Carga las variables de entorno para el nombre de usuario de la base de datos, la contraseña y el host desde process.env.
// Estas son las credenciales de la base de datos MongoDB.
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

// Construye la URI de conexión a la base de datos MongoDB utilizando las credenciales cargadas anteriormente.
// Utiliza el esquema mongodb+srv que es para las conexiones a las bases de datos MongoDB alojadas en MongoDB Atlas.
// Las opciones de conexión 'retryWrites=true' y 'w=majority' se refieren a las configuraciones de escritura y manejo de errores.
const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/?retryWrites=true&w=majority`;

// Esta es una función asíncrona que intenta conectar a la base de datos MongoDB utilizando mongoose.
const conectarDB = async () => {
    try {
        // Intenta conectarse a MongoDB utilizando la URI que construimos anteriormente.
        // 'useNewUrlParser: true' y 'useUnifiedTopology: true' son opciones para el cliente de MongoDB para usar el nuevo motor de análisis de URL y el nuevo motor de administración de topología respectivamente.
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

        // Si la conexión es exitosa, registra este mensaje en la consola.
        console.log('Conexión exitosa a MongoDB');
    } catch (err) {
        // Si hay un error al intentar la conexión, registra el error en la consola.
        console.log('Error al conectar a MongoDB: ', err);

        // Si hay un error al conectar a la base de datos, el proceso se detiene y la aplicación se cierra con un código de estado de error (1).
        process.exit(1);
    }
};

// Exporta la función 'conectarDB' para que pueda ser utilizada en otras partes de la aplicación.
module.exports = conectarDB;
