/*- - - - - - - - Rutas clientes - - - - - - - -*/
import { Router } from "express"; //const routes = require("express").Router();
const clientRoutes = Router();
import { getAllClients, getClientById, createClient, updateClient, deleteClient } from "../controllers/client.controller.js";

/*- - - - - - - - /clients - - - - - - - -*/
clientRoutes.get("/", getAllClients);
clientRoutes.get("/:clientId", getClientById);
clientRoutes.post("/", createClient);
clientRoutes.put("/:clientId", updateClient);
clientRoutes.delete("/:clientId", deleteClient);

//module.exports = routes;
export default clientRoutes;
