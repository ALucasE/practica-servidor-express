import { Router } from "express"; //const routes = require("express").Router();
const clientRoutes = Router();

import { getAllClients, getClientById, createClient, updateClient } from "../controllers/client.controller.js";

clientRoutes.get("/", getAllClients);
clientRoutes.get("/:clientId", getClientById);
clientRoutes.post("/", createClient);
clientRoutes.put("/:clientId", updateClient);

//module.exports = routes;
export default clientRoutes;
