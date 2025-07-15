# 🛒 Backend / API de Productos con Node.js y Express

Este proyecto es una **API REST** construida con **Node.js**, **Express** y **Body-Parser**, que permite gestionar una lista de productos. 
La API incluye rutas para obtener todos los productos, buscar por nombre, y obtener un producto por su ID.
Por ahora es ese el proyecto, se ira mejorando conforme el tiempo.
## 🚀 Tecnologías utilizadas

- Node.js
- Express
- Body-Parser
- CORS
- FireBase

## 🔌 Endpoints disponibles
GET /
    Retorna un mensaje de bienvenida.

GET "api/products"
    Retorna todos los productos disponibles.

GET "api/products/:id"
    Busca un producto por su ID.
    Ejemplo: /products/3

GET "api/products/search?nombre= "
    Filtra productos por nombre (parcial o completo).
    Ejemplo: /products/search?nombre=mouse

## ✍️ Autor
Alan Fernando Zablosky

💻 Portfolio personal
