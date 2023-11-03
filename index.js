/*- - - - - - - - Imports - - - - - - - -*/
import express from "express"; //const express = require("express");
import indexRoutes from "./src/routers/index.routes.js"; //const indexRoutes = require("./src/routers/index.routes");
import clientRoutes from "./src/routers/client.routes.js";
import authRouters from "./src/routers/auth.routes.js";
import settingDotEnv from "./src/settings/config.js"; //const { setting } = require("./src/settings/config");
import "./src/database/db.js";

/*- - - - - - - - Configuraciones - - - - - - - -*/
const app = express();
const { port } = settingDotEnv();

/*- - - - - - - - Middlewares - - - - - - - -*/
app.use(express.json());

/*- - - - - - - - Rutas - - - - - - - -*/
app.use("/", indexRoutes);
app.use("/clients", clientRoutes);
app.use("/users", authRouters);

/*- - - - - - - - Conexión - - - - - - - -*/
app.listen(port, () => {
  console.log(`Servidor en ejecución en http://${process.env.HOST}:${port}`);
});
