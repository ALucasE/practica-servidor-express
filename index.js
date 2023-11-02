/*- - - - - - - - Imports - - - - - - - -*/
import express from "express"; //const express = require("express");
import indexRoutes from "./src/routers/index.routes.js"; //const indexRoutes = require("./src/routers/index.routes");
import settingDotEnv from "./src/settings/config.js"; //const { setting } = require("./src/settings/config");
import "./src/database/db.js";
/*- - - - - - - - Configuraciones - - - - - - - -*/
const app = express();

const { port } = settingDotEnv();

app.use("/", indexRoutes);
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.listen(port, () => {
  console.log(`Servidor en ejecución en http://${process.env.HOST}:${port}`);
});
