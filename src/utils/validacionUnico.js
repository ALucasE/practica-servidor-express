import mongoose from "mongoose";

// Función genérica para validar un campo único en la BD
export const validateUnique = async (coleccion, campo, valor) => {
  const Model = mongoose.model(coleccion);
  const filtro = {};
  filtro[campo] = valor;

  const existente = await Model.findOne(filtro);
  console.log(existente);
  return existente;
};

// //USO

// //if(validateUnique('coleccion', 'campo', valor)) return res.status(400).json({msg: `El ${valor} ya existe`})

// //'coleccion' es el nombre de la colección de mongosee
// //'campo' es el nombre del campo que deseas verificar
// //valor es el que deseas comprobar si ya existe en la base de datos

/* NUEVA VERSION */
// import mongoose from "mongoose";

// export async function validateUnique(valor, columna, modelo) {
//   try {
//     const filtro = { [columna]: valor };
//     const resultado = await modelo.findOne(filtro);
//     return !resultado;
//   } catch (error) {
//     console.error("Error al validar campo único:", error);
//     return false;
//   }
// }
