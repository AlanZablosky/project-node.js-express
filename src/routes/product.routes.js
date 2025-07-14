/*
GET /api/products devuelve todos los productos.

GET /api/products/:id devuelve el producto con el ID indicado.

POST /api/products/create recibe en el cuerpo (body) de la 
petición la información sobre el nuevo producto para ser guardado 
en el servicio de datos en la nube.

DELETE /api/products/:id elimina el producto con el ID indicado.

auth.routes.js:

POST /auth/login recibe las credenciales de usuario en el cuerpo 
(body) de la petición y devuelve el Bearer token si son válidas o 
un error de autenticación en caso contrario.
*/
// src/routes/product.routes.js
import express from 'express';
import { db } from '../config/db.js';   
import { Router } from 'express';
//import products from '../models/product.model.js'; 
import { getAllProducts, searchProducts, getProductById, createProduct } from '../controllers/product.controller.js';

const router = Router();

// Peticion Get bienvenida
router.get("/", (req, res) => {
    res.send ('Server iniciado, Bienvenido!!!');
});

// Peticion busqueda por nombre - http://localhost:3000/api/products/search?nombre=algo -
router.get("/productos/search", searchProducts);

// Peticiones Get
router.get("/productos", getAllProducts); // Aquí deberías devolver la lista de productos

// Peticiones Get por ID
router.get("/productos/:id", getProductById); // Aquí deberías devolver el producto por ID

// peticiones Post
router.post("/productos/create", createProduct); // Aquí deberías crear un nuevo producto

export default router;