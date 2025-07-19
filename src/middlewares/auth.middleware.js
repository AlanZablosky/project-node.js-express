import  { verifyToken } from "../utils/jwt.js"; // Importa la función verifyToken del archivo jwt.js 

export const authentication = (req, res, next) => {
    const token = req.headers["authorization"].split(' ')[1];

    if (!token) return res.sendStatus(401); // Si no hay token, devuelve un error 401 (No autorizado)
    const verificationResult = verifyToken(token);
    
    if (!verificationResult.valid) 
        return res.status(403); // Si el token no es válido, devuelve un error 403
        
        req.user = verificationResult.decoded; // Si el token es válido, se agrega el usuario a la solicitud al req(user)
        
        next(); // Llama al siguiente middleware o ruta
    
};