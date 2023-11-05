/*- - - - - - - - Rutas clientes - - - - - - - -*/
import { Router } from "express"; //const routes = require("express").Router();
const clientRoutes = Router();
import { getAllClients, getClientById, createClient, updateClient, deleteClient } from "../controllers/client.controller.js";
import { userAuth, isAdmin } from "../middleware/user.auth.jwt.js";

/*- - - - - - - - /clients - - - - - - - -*/
clientRoutes.get("/", [userAuth], getAllClients);
clientRoutes.get("/:clientId", [userAuth], getClientById);
clientRoutes.post("/", [userAuth, isAdmin], createClient);
clientRoutes.put("/:clientId", [userAuth, isAdmin], updateClient);
clientRoutes.delete("/:clientId", [userAuth, isAdmin], deleteClient);

//module.exports = routes;
export default clientRoutes;
