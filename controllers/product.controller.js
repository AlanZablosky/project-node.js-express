import productos from "../models/product.model.js";
import express from 'express';


export const getAllProducts = (req, res) =>  {
    res.json(productos)
};

export const searchProducts = (req, res) => {
    const { nombre } = req.query;
    console.log('Buscando nombre:', nombre);

    if(!nombre){
        return res.status(400).json({ error: 'El nombre es requerido' });
    }
    const Productsfiltered = productos.filter((item) => 
        item.nombre.toLowerCase().includes(nombre.toLowerCase())
    );
    if (Productsfiltered.length == 0) {
        return res.status(404).json({ error: 'No se encuentra el Producto' });
    } 
    res.json(Productsfiltered);
};

export const getProductById = (req, res) => {
    const Id = parseInt(req.params.id);
    const product = productos.find((item)=> item.id == Id);
    
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ error: 'Producto no encontrado' });
    }
};