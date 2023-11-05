/*- - - - - - - - Rutas productos - - - - - - - -*/
import { Router } from "express";
const productRoutes = Router();
import { getAllPorducts, getPorductsById, ugradePorduct, deleteProduct, createPorduct } from "../controllers/product.controller.js";
import { userAuth, isAdmin } from "../middleware/user.auth.jwt.js";

/*- - - - - - - - /products - - - - - - - -*/
productRoutes.get("/", [userAuth], getAllPorducts);
productRoutes.get("/:productId", [userAuth], getPorductsById);
productRoutes.post("/", [userAuth, isAdmin], createPorduct);
productRoutes.put("/:productId", [userAuth, isAdmin], ugradePorduct);
productRoutes.delete("/:productId", [userAuth, isAdmin], deleteProduct);

export default productRoutes;
