/*- - - - - - - - Rutas clientes - - - - - - - -*/
/*- - - - - - - - / - - - - - - - -*/
import { Router } from "express"; //const routes = require("express").Router();
const routes = Router();

import controller from "../controllers/index.controllers.js"; //const { getIndex } = require("../controllers/index.controllers");
const { getIndex, getAll } = controller;

routes.get("/", getIndex);
routes.get("/all", getAll);

//module.exports = routes;
export default routes;
