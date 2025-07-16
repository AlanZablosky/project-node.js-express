import * as model from "../models/product.model.js";

// Controlador para manejar las rutas de productos
export const getAllProducts = async (req, res) => {
  const { nombre } = req.query;
  const productos = await model.getAllProducts();
// Si se proporciona un nombre, filtra los productos
 if (nombre){
    const productsFiltered = productos.filter((item) =>
        // Verifica si el nombre del producto incluye el nombre buscado
        item.categories.includes(nombre)
    );

    res.json(productsFiltered);
    return;
  }
    // Si no se proporciona un nombre, devuelve todos los productos
    res.json(productos);
};

// Controlador para buscar productos por nombre
export const searchProducts = async(req, res) => {
    // Obtiene el nombre del query string
    const { nombre } = req.query;
    console.log('Buscando nombre:', nombre);
    // Si no se proporciona un nombre, devuelve un error
    if(!nombre){
        return res.status(400).json({ error: 'El nombre es requerido' });
    }
    // Obtiene todos los productos
    const productos = await model.getAllProducts();
    // Filtra los productos que coinciden con el nombre proporcionado
    const Productsfiltered = productos.filter((item) => 
        // Verifica si el nombre del producto incluye el nombre buscado
        item.nombre.toLowerCase().includes(nombre.toLowerCase())
    );
    // Si no se encuentran productos, devuelve un error 404
    if (Productsfiltered.length == 0) {
        return res.status(404).json({ error: 'No se encuentra el Producto' });
    } 
    // Devuelve los productos filtrados
    res.json(Productsfiltered);
};

// Controlador para obtener un producto por ID
export const getProductById = async(req, res) => {
    // Obtiene el ID del producto desde los parámetros de la solicitud
    const id = req.params.id;
    // Verifica que el ID sea válido
    const productos = await model.getProductById(id);
    if (productos) { // Verifica si el producto existe
        res.json(productos);
    } else {
        res.status(404).json({ error: 'Producto no encontrado' }); // ahora tambien si es null me devuelve este error al buscar por ID
    }
};

// Controlador para crear un nuevo producto
export const createProduct = async (req, res) => {
    // Modelo de datos del producto
    const { nombre, precio, disponible } = req.body;
    console.log('Creando producto:', nombre,'-','$', precio,'-','disponible:', disponible);

    // Verifica que los campos obligatorios estén presentes
    if (!nombre || precio == null || disponible == null) {
        return res.status(400).json({ error: "Faltan datos obligatorios" });
    } else {
    // Crea el producto utilizando el modelo
        const id = await model.createProduct({ nombre, precio, disponible });
        res.status(201).json({ mensaje: "Producto creado", id });
}};

// Controlador para eliminar un producto por ID
export const deleteProduct = async (req, res) => {  
    // Obtiene el ID del producto desde los parámetros de la solicitud
    const id = req.params.id;   
    const producto = await model.getProductById(id);
    // Verifica si el producto no existe
    if (!producto) { 
        return res.status(404).json({ error: 'Producto no encontrado o no existe' });
    }  else { // Si el producto existe, lo elimina
        await model.deleteProduct(id);
        res.json({ mensaje: 'Producto eliminado con exito' });
    }
};

// Controlador para actualizar un producto por ID
export const updateProduct = async (req, res) => {
    const id = req.params.id;
    const { nombre, precio, disponible } = req.body;

    // Verifica que los campos obligatorios estén presentes
    if (!nombre || precio == null || disponible == null) {
        return res.status(400).json({ error: "Faltan datos obligatorios" });
    }

    // Verifica si el producto existe
    const producto = await model.getProductById(id);
    if (!producto) {
        return res.status(404).json({ error: 'Producto no encontrado' });
    }

    // Actualiza el producto utilizando el modelo
    await model.updateProduct(id, { nombre, precio, disponible });
    res.json({ mensaje: `Producto actualizado con éxito tiene el Id:${id} - nombre: ${nombre} - Precio: $${precio} - Disponible: ${disponible}` });
}