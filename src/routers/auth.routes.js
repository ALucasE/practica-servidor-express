import { Router } from "express";
import { signup } from "../controllers/auth.controller.js";
import { validarUsuario, erroresValidacion } from "../middleware/user.validations.js";
const authRouters = Router();

authRouters.post("/signup", validarUsuario, erroresValidacion, signup);

export default authRouters;
