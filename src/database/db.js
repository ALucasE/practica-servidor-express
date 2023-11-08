/*- - - - - - - - Configuración de Base de Datos con MongoDB - - - - - - - -*/
import { connect } from "mongoose";
import settingDotEnv from "../settings/config.js";
const { db_host, db_user, db_pass, db_uri, db_name } = settingDotEnv();

export const startConnectionDB = async () => {
  try {
    const db = await connect(`mongodb+srv://${db_user}:${db_pass}@${db_host}${db_name}`);

    console.log("Conexión a la base de datos exitosa");
  } catch (error) {
    console.log("Error al conectarse a MongoDB: " + err);
  }
};
