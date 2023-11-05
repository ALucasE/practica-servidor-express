import mongoose from "mongoose";

// Función genérica para validar un campo único en la BD
export const validateUnique = async (coleccion, campo, valor) => {
  const Model = mongoose.model(coleccion);
  const filtro = {};
  filtro[campo] = valor;

  const existente = await Model.findOne(filtro);
  return !!existente;
};

//USO

//if(validateUnique('coleccion', 'campo', valor)) return res.status(400).json({msg: `El ${valor} ya existe`})

//'coleccion' es el nombre de la colección de mongosee
//'campo' es el nombre del campo que deseas verificar
//valor es el que deseas comprobar si ya existe en la base de datos
