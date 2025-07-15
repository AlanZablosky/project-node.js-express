# 🛒 Backend / API de Productos con Node.js y Express

Este proyecto es una **API REST** construida con **Node.js**, **Express** y **Body-Parser**, que permite gestionar una lista de productos. 
La API incluye rutas para obtener todos los productos, buscar por nombre, obtener un producto por su ID, Crea producto nuevo y Elimina por Id.
Por ahora este es el Proyecyo y se ira actualizand...

## 🚀 Tecnologías utilizadas

- Node.js
- Express
- Body-Parser
- CORS
- FireBase

## 🔌 Endpoints disponibles
GET "/"
    Retorna un mensaje de bienvenida.

GET "api/products"
    Retorna todos los productos disponibles.

GET "api/products/:id"
    Busca un producto por su ID.
    Ejemplo: /products/3

GET "api/products/search?nombre= "
    Filtra productos por nombre (parcial o completo).
    Ejemplo: /products/search?nombre=mouse

Post "api/productos/create"
    Usando postman en "body" agregar nombre, precio y disponibilidad.
    Ejemplo: {
                "nombre": "cacao",
                "precio": 1500,
                "disponible": true
            }

Delete "api/productos/delete/:id"
    Los productos se eliminan por id.
    Ejemplo: api/productos/delete/3

## ✍️ Autor
Alan Fernando Zablosky

💻 Portfolio personal
