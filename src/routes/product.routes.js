/*
auth.routes.js:

POST /auth/login recibe las credenciales de usuario en el cuerpo 
(body) de la petición y devuelve el Bearer token si son válidas o 
un error de autenticación en caso contrario.
*/
import express from 'express';
import { db } from '../config/db.js';   
import { Router } from 'express';
import { getAllProducts, searchProducts, getProductById, createProduct, deleteProduct, updateProduct } from '../controllers/product.controller.js';

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

// Peticiones Delete
router.delete("/productos/delete/:id", deleteProduct); // Aquí deberías eliminar el producto por ID

//Peticin actualizada de productos
router.patch("/productos/editar/:id", updateProduct); // Aquí deberías actualizar el producto por ID

// auth.routes.js:


// Post /auth/login recibe las credenciales de usuario en el cuerpo


export default router;