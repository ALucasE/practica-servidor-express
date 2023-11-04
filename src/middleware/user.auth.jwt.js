/*- - - - - - - - AUTENTICACION y VALIDACION - - - - - - - -*/
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import { httpError } from "../controllers/handleError.controller.js";
import settingDotEnv from "../settings/config.js";
const { jwtkey } = settingDotEnv();

export const userAuth = async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];
    if (!token) return res.status(404).json({ msg: "No se envió un token" }); //Si no hay token devuelve error de autenticación
    //jwt verifica el token
    const verifyToken = jwt.verify(token, jwtkey);
    //se busca el usuario y el rol con el token verificado (que trae el id del usuario)
    const usuario = await User.findById(verifyToken.id).populate("roles");
    //se guarda el ID del usuario en una variable "global"
    res.userId = usuario._id;
    next();
  } catch (error) {
    let msg = "Error en el token";
    httpError(res, error);
  }
};

export const isAdmin = async (req, res, next) => {
  try {
    const usuario = await User.findById(res.userId).populate("roles");
    const roles = usuario.roles;
    console.log(roles);
    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name == "admin") {
        next();
        return;
      }
    }
    return res.status(404).json({ msg: "Debe ser administrador para usar esta función" });
  } catch (error) {
    let msg = "Error en el token";
    httpError(res, error);
  }
};
