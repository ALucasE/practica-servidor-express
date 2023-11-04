import { Router } from "express";
import { signup, signin } from "../controllers/auth.controller.js";
import { validarUsuario, erroresValidacion } from "../middleware/user.validations.js";
const authRouters = Router();

authRouters.post("/signup", validarUsuario, erroresValidacion, signup);
authRouters.post("/signin", signin);

export default authRouters;
