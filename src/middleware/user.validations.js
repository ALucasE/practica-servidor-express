/*- - - - - - - - VALIDACIONES - - - - - - - -*/
import { body, validationResult } from "express-validator";

export const validarUsuario = [
  body("username")
    .notEmpty()
    .withMessage("El Nombre de usuario no debe estar vació")
    .isLength({ min: 6 })
    .withMessage("El Nombre de usuario debe tener un mínimo de 6 caracteres"),
  body("email").isEmail().withMessage("El correo electrónico debe ser valido").notEmpty().withMessage("El correo electrónico no debe estar vació"),
  body("password")
    .notEmpty()
    .withMessage("La contraseña no debe estar vació")
    .isLength({ min: 6 })
    .withMessage("La contraseña debe tener un mínimo de 6 caracteres"),
];

export const erroresValidacion = (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json(error);
  }
  next();
};
