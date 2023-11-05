/*- - - - - - - - Rutas productos - - - - - - - -*/
import { Router } from "express";
const orderRoutes = Router();
import { getAllOrders, createOrder, updateOrder, getOrderById, getOrderByClientId } from "../controllers/order.controllers.js";
import { userAuth, isAdmin } from "../middleware/user.auth.jwt.js";

/*- - - - - - - - /products - - - - - - - -*/
orderRoutes.get("/", [userAuth], getAllOrders);
orderRoutes.get("/:orderId", [userAuth], getOrderById);
orderRoutes.post("/", [userAuth, isAdmin], createOrder);
orderRoutes.put("/:orderId", [userAuth, isAdmin], updateOrder);

orderRoutes.get("/client/:clientId", [userAuth], getOrderByClientId);
//orderRoutes.delete("/:orderId", );

export default orderRoutes;
