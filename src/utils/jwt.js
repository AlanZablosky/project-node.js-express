import jwt from 'jsonwebtoken';
import { envs } from "../config/envs.js"; // Importa las variables de entorno

const {jwt_secret} = envs.secrets;  

export const generateToken = (userData) => {
    const user = { id: userData.id, email: userData.email }; // Crea un objeto con los datos del usuario
    const expiration = {expiresIn: '1h'}; // El token expirará en 1 hora
    return jwt.sign(user, jwt_secret, expiration);
};

export const verifyToken = (token) => {
    try {
        const decoded = jwt.decode(token, jwt_secret); // Decodifica el token usando la clave secreta
        return {valid: true, decoded}; // Devuelve un objeto con la validez del token y los datos decodificados
    } catch (error) {
        throw new Error('Token inválido o expirado'); // Lanza un error si el token es inválido o ha expirado
    }
};