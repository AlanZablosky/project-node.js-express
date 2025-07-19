import express from 'express';
import { db } from '../config/db.js';   
import { Router } from 'express';
import { getAllProducts, searchProducts, getProductById, 
    createProduct, deleteProduct, updateProduct } from '../controllers/product.controller.js';
import { authentication } from '../middlewares/auth.middleware.js';



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
router.post("/productos/create", authentication, createProduct); // Aquí deberías crear un nuevo producto, requiere autenticación

// Peticiones Delete
router.delete("/productos/delete/:id", authentication, deleteProduct); // Aquí deberías eliminar el producto por ID

//Peticin actualizada de productos
router.patch("/productos/editar/:id", authentication, updateProduct); // Aquí deberías actualizar el producto por ID

export default router;