import mongoose from "mongoose";
import settingDotEnv from "../settings/config.js";
const { db_host, db_user, db_pass } = settingDotEnv();
mongoose
  .connect(`mongodb+srv://${db_user}:${db_pass}@${db_host}`)
  //.connect("mongodb+srv://develop:Sl6pJNP56S4IP9Uy@cluster0.15r8lss.mongodb.net/")
  .then((db) => {
    console.log("Conexión a mongoDB exitosa");
  })
  .catch((err) => {
    console.log("Error al conectarse a MongoDB: " + err);
    console.log(`mongodb+srv://${db_user}:${db_pass}>@${db_host}`);
  });
