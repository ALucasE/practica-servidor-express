import User from "../models/user.model.js";
import Role from "../models/role.models.js";
import jwt from "jsonwebtoken";
import settingDotEnv from "../settings/config.js";
const { jwtkey } = settingDotEnv();

// Metodos de SIGNUP (Registrarse) y SIGNIN (Ingresar)

//Método para registrar un nuevo usuario
export const signup = async (req, res) => {
  try {
    const { username, email, password, roles } = req.body;
    const newUser = new User({
      username,
      email,
      password: await User.encryptPassword(password),
    });

    //lógica para roles
    if (roles) {
      //Si viene en la petición el rol y coincide con un rol existente lo asigna
      const buscarRol = await Role.find({ name: { $in: roles } });
      newUser.roles = buscarRol.map((role) => role._id);
    } else {
      //En caso de que la petición llega sin rol, le asigna el rol por defecto que es user
      const defaultRol = await Role.findOne({ name: "user" });
      newUser.roles = [defaultRol._id];
    }

    //Se aguarda el nuevo usuario creado
    const nuevoUsuario = await newUser.save();
    const rol = await Role.findById(nuevoUsuario.roles); //Esto se puede comentar
    // Token de JWT
    const token = jwt.sign({ id: nuevoUsuario._id }, jwtkey, { expiresIn: "2h" });
    res.status(200).json({ msg: "El usuario se creo con éxito", token, nuevoUsuario, rol }); //Esto se puede comentar
  } catch (error) {
    return res.status(500).json({ msg: "Error al crear usuario" });
  }
};
