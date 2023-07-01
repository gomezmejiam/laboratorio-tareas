const supertest = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const server = require('./server');

let mongoServer;

beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();

    await mongoose.connect(mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
});

afterAll(async () => {
    await mongoose.connection.close();
    await mongoServer.stop();
    await new Promise(resolve => server.close(resolve)); // Cierra el servidor
});

describe('POST /', () => {
    it('should create a new task and return 201 status', async () => {
        const data = {
            nombre: 'Tarea de pruebas Task',
            fechaLimite: getFechaFuturo(),
            estado: 'creada',
        };

        await supertest(server)
            .post('/tarea')
            .send(data)
            .expect(201)
            .then((response) => {
                expect(response.body.nombre).toBe(data.nombre);
                expect(new Date(response.body.fechaLimite).toISOString().split('.')[0]+"Z").toBe(data.fechaLimite);
                expect(response.body.estado).toBe(data.estado);
            });
    });
});

const getFechaFuturo = () => {
    const currentDate = new Date();

    // Agregamos un número de días a la fecha actual para obtener una fecha en el futuro
    const futureDate = new Date(currentDate.setDate(currentDate.getDate() + 5)); // Aquí estamos agregando 5 días a la fecha actual

    // Para convertir la fecha a formato ISO con precisión hasta los segundos (sin milisegundos), hacemos lo siguiente:
    const futureDateISO = futureDate.toISOString().split('.')[0]+"Z";
    return futureDateISO;
};
