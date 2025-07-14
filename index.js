import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import producsRouters from './src/routes/product.routes.js';
import 'dotenv/config';

const app = express ();
const PORT = process.env.PORT || 3002;

// middleware global
app.use(cors({
    origin: `http://localhost:${PORT}`,
    // Métodos permitidos
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    // Headers permitidos
    allowedHeaders: ['Content-Type', 'Authorization'],
    // Permite cookies o credenciales
    credentials: true
}));

// Middleware body-parser para leer JSON
app.use(bodyParser.json());
app.use(express.json());
// Middleware routers
app.use('/api/', producsRouters);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`servidor arriba: http://localhost:${PORT}/api`);
    // Inicializar con "npm run dev" 
});