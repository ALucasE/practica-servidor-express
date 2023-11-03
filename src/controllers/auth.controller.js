import User from "../models/user.model.js";

// Metodos de SIGNUP (Registrarse) y SIGNIN (Ingresar)

export const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = new User({
      username,
      email,
      password,
    });

    const nuevoUsuario = await newUser.save();
    res.json(nuevoUsuario);
  } catch (error) {
    //console.error(error);
    return res.status(400).json({ msg: "El usuario o el email ya existe" });
  }
};
