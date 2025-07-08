import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import productos from './models/product.model.js'; 
import producsRouters from './routes/product.routes.js';


const app = express ();
const PORT = 3000;

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

// Middleware routers
app.use('/api/', producsRouters);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`servidor arriba: http://localhost:${PORT}`);
    // Inicializar con "npm run dev" 
});