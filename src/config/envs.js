import { config } from "dotenv";
config(); // Carga las variables de entorno desde el archivo .env

export const envs = {
    Database: {
        apiKey: process.env.APIKEY,
        authDomain: process.env.AUTHDOMAIN,
        projectId: process.env.PROJECTID,   
        storageBucket: process.env.STORAGEBUCKET,
        messagingSenderId: process.env.MESSAGINGSENDERID,
        appId: process.env.APPID,
    },
    port : process.env.PORT || 3002,
    secrets: {
        jwt_secret: process.env.JWT_SECRET || 'AlgunSecretoMuyFuerte',
        session: process.env.SESSION_KEY || 'kjhskjhdskjh'
    }
};