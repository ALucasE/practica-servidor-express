/*- - - - - - - - Imports - - - - - - - -*/
import express from "express"; //const express = require("express");
import indexRoutes from "./src/routers/index.routes.js"; //const indexRoutes = require("./src/routers/index.routes");
import clientRoutes from "./src/routers/client.routes.js";
import authRouters from "./src/routers/auth.routes.js";
import productRoutes from "./src/routers/product.routes.js";
import orderRoutes from "./src/routers/order.routes.js";
import settingDotEnv from "./src/settings/config.js"; //const { setting } = require("./src/settings/config");
import "./src/database/db.js";
import { createRole } from "./src/settings/inicial.setup.js";

/*- - - - - - - - Configuraciones - - - - - - - -*/
const app = express();
createRole();
const { port } = settingDotEnv();

/*- - - - - - - - Middlewares - - - - - - - -*/
app.use(express.json());

/*- - - - - - - - Rutas - - - - - - - -*/
app.use("/", indexRoutes);
app.use("/clients", clientRoutes);
app.use("/users", authRouters);
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);

/*- - - - - - - - Conexión - - - - - - - -*/
app.listen(port, () => {
  console.log(`Servidor en ejecución en http://${process.env.HOST}:${port}`);
});
