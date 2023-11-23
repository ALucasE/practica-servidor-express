/*- - - - - - - - Imports - - - - - - - -*/
import express from "express"; //const express = require("express");
import indexRoutes from "./src/routers/index.routes.js"; //const indexRoutes = require("./src/routers/index.routes");
import clientRoutes from "./src/routers/client.routes.js";
import authRouters from "./src/routers/auth.routes.js";
import productRoutes from "./src/routers/product.routes.js";
import orderRoutes from "./src/routers/order.routes.js";
import settingDotEnv from "./src/settings/config.js"; //const { setting } = require("./src/settings/config");
import { startConnectionDB } from "./src/database/db.js";
import { createRole } from "./src/settings/inicial.setup.js";
import morgan from "morgan";
import cors from "cors";

/*- - - - - - - - Configuraciones - - - - - - - -*/
const app = express();
createRole();
const port = process.env.PORT || settingDotEnv().port;

/*- - - - - - - - Middlewares - - - - - - - -*/
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

/*- - - - - - - - Rutas - - - - - - - -*/
app.use("/api/", indexRoutes);
app.use("/api/clients", clientRoutes);
app.use("/api/users", authRouters);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

/*- - - - - - - - Conexión - - - - - - - -*/
app.listen(port, async () => {
  await startConnectionDB();
  console.log(`Servidor en ejecución en http://${process.env.HOST}:${port}
  Rutas:
  http://${process.env.HOST}:${port}/api/orders
  http://${process.env.HOST}:${port}/api/products
  http://${process.env.HOST}:${port}/api/clients
  `);
});
