/*- - - - - - - - Inicializaron de Roles en la base de datos - - - - - - - -*/
import Role from "../models/role.models.js";

export const createRole = async () => {
  try {
    const contador = await Role.estimatedDocumentCount(); //Cuenta cuantos Roles están generados
    console.log(`Existen ${contador} roles en la base de datos`);
    if (contador > 0) {
      return; //Si existen roles creados en la BD directamente hace return
    } else {
      const valores = await Promise.all([new Role({ name: "admin" }).save(), new Role({ name: "user" }).save()]); //Crea los Roles admin y user
      console.log(`Se crearon los roles: ${valores}`);
    }
  } catch (error) {
    console.error(error);
  }
};
