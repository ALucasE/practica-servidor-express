/*- - - - - - - - Rutas productos - - - - - - - -*/
import { Router } from "express";
const productRoutes = Router();
import { getAllPorducts, getPorductsById, ugradePorduct, deleteProduct, createPorduct } from "../controllers/product.controller.js";
import { userAuth, isAdmin } from "../middleware/user.auth.jwt.js";

/*- - - - - - - - /products - - - - - - - -*/
productRoutes.get("/", userAuth, isAdmin, getAllPorducts);
productRoutes.get("/:productId", getPorductsById);
productRoutes.post("/", createPorduct);
productRoutes.put("/:productId", ugradePorduct);
productRoutes.delete("/:productId", deleteProduct);

export default productRoutes;
