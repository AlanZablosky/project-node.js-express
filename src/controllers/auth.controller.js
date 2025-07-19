import { generateToken } from "../utils/jwt.js";

const default_user = {
    id: 1, 
    email: "admin@admin.com", 
    password: "admin123"};

export const login = async (req, res) => {
    const { email, password } = req.body;
    // Verifica si el usuario existe y las credenciales son correctas
    if (email === default_user.email && password === default_user.password) {
        const token = generateToken(default_user);
        res.json({ token }); // Devuelve el token al cliente
    } else {
        res.status(401).json({ error: "Credenciales inválidas" }); // Devuelve un error si las credenciales son incorrectas
    }
};


