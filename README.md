# 🛒 Backend / API de Productos con Node.js y Express

Este proyecto es una **API REST** construida con **Node.js**, **Express** y **Body-Parser**, que permite gestionar una lista de productos. 

La **API** incluye rutas para obtener todos los productos, buscar por nombre, obtener un producto por su ID, Crea producto nuevo y Elimina por Id. Por ahora este es el Proyecyo y se ira actualizand0...


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

POST "api/productos/create" 
    Usando postman en "body" agregar nombre, precio y disponibilidad. 
    Ejemplo: { "nombre": "cacao", "precio": 1500, "disponible": true }

DELETE "api/productos/delete/:id" 
    Los productos se eliminan por Id. 
    Ejemplo: api/productos/delete/3  

PATCH "api/productos/editar/:id"
    Busca un producto por el Id y en el "body" de postman
    se actualizan nombre, precio y disponibilidad, obligatoriamente!! jaja
    Ejemplo : api/productos/PATCH/4 


## ✍️ Autor
Alan Fernando Zablosky

💻 Portfolio personal
