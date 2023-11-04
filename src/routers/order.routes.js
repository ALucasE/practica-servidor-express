/*- - - - - - - - Rutas productos - - - - - - - -*/
import { Router } from "express";
const orderRoutes = Router();
import { getAllOrders, createOrder, updateOrder, getOrderById, getOrderByClientId } from "../controllers/order.controllers.js";

/*- - - - - - - - /products - - - - - - - -*/
orderRoutes.get("/", getAllOrders);
orderRoutes.get("/:orderId", getOrderById);
orderRoutes.post("/", createOrder);
orderRoutes.put("/:orderId", updateOrder);

orderRoutes.get("/client/:clientId", getOrderByClientId);
//orderRoutes.delete("/:orderId", );

export default orderRoutes;
