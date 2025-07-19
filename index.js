import express from 'express';
import cors from 'cors';
import producsRouters from './src/routes/product.routes.js';
import 'dotenv/config';
import { envs } from './src/config/envs.js';
import authRouters from './src/routes/auth.route.js';


const app = express ();
const PORT = envs.port || 3002;


app.use(cors({
    origin: `http://localhost:${PORT}`,
    // Métodos permitidos
    methods: ['GET', 'POST', 'PATCH', 'DELETE'], 
    // Headers permitidos
    allowedHeaders: ['Content-Type', 'Authorization'],
    // Permite cookies o credenciales
    credentials: true
}));

// Middleware 
app.use(express.json());

// routes
app.use('/api/', producsRouters);

app.use('/auth',authRouters);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`servidor arriba: http://localhost:${PORT}/api`);
    // Inicializar con "npm run dev" 
});