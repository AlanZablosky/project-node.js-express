# 🛒 Backend / API de Productos con Node.js y Express.
Este proyecto es una **API RESTful** construida con **Node.js**, **Express** y **Firebase**, que permite gestionar una lista de productos.

La API incluye rutas para:
- Obtener todos los productos
- Buscar por nombre
- Obtener un producto por ID
- Crear productos nuevos
- Editar productos existentes
- Eliminar productos por ID

---

## 🚀 Tecnologías utilizadas

    - Node.js
    - Express
    - CORS
    - FireBase (Firestore)
    - Dotenv
    - Jsonwebtoken (JWT)  

---

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
        Ejemplo:{
                    "nombre": "Cacao",
                    "precio": 1500,
                    "disponible": true
                }

    DELETE "api/productos/delete/:id" 
        Los productos se eliminan por Id. 
        Ejemplo: api/productos/delete/3  

    PATCH "api/productos/editar/:id"
        Busca un producto por el Id y en el "body" de postman
        se actualizan nombre, precio y disponibilidad, obligatoriamente!! jaja
        Ejemplo : api/productos/PATCH/4

    POST "auth/login"
        Para loguerase y autentificar el uso de la creacion, edicion y actualizacion de los productos debes acceder con el email y contraseña, en este caso es:{
                                        email: "admin@admin.com", 
                                        password: "admin123"
                                    }
        Una vez aceptado estas credenciales te dara un "token" que debes usar en Postman.


## ✍️ Autor
    Alan Fernando Zablosky

    💻 Portfolio personal - https://alanzablosky.github.io/
