/*- - - - - - - - Configuración de Base de Datos con MongoDB - - - - - - - -*/
import mongoose from "mongoose";
import settingDotEnv from "../settings/config.js";
const { db_host, db_user, db_pass, db_uri } = settingDotEnv();
mongoose
  .connect(`mongodb+srv://${db_user}:${db_pass}@${db_host}`)
  //.connect("db_uri")
  .then((db) => {
    console.log("Conexión a mongoDB exitosa");
  })
  .catch((err) => {
    console.log("Error al conectarse a MongoDB: " + err);
  });
