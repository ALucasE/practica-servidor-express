/*- - - - - - - - Rutas productos - - - - - - - -*/
import { Router } from "express";
const orderRoutes = Router();
import { getAllOrders, createOrder, updateOrder, getOrderById, getOrderByClientId } from "../controllers/order.controllers.js";
import { userAuth, isAdmin } from "../middleware/user.auth.jwt.js";

/*- - - - - - - - /products - - - - - - - -*/
orderRoutes.get("/", getAllOrders);
orderRoutes.get("/:orderId", getOrderById);
orderRoutes.post("/", createOrder);
orderRoutes.put("/:orderId", updateOrder);

orderRoutes.get("/client/:clientId", getOrderByClientId);
//orderRoutes.delete("/:orderId", );

export default orderRoutes;

/*
Se retiran validaciones para hacer pruebas:

orderRoutes.get("/", [userAuth], getAllOrders);
orderRoutes.get("/:orderId", [userAuth], getOrderById);
orderRoutes.post("/", [userAuth, isAdmin], createOrder);
orderRoutes.put("/:orderId", [userAuth, isAdmin], updateOrder);
orderRoutes.get("/client/:clientId", [userAuth], getOrderByClientId);
*/
