import { Router } from "express";
import {  login } from "../controllers/auth.controller.js";

const router = Router();    

router.post("/login", login);// Ruta para el login

export default router;