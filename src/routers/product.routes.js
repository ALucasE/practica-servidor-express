/*- - - - - - - - Rutas productos - - - - - - - -*/
import { Router } from "express";
const productRoutes = Router();
import { getAllPorducts, getPorductsById, ugradePorduct, deleteProduct, createPorduct } from "../controllers/product.controller.js";

/*- - - - - - - - /products - - - - - - - -*/
productRoutes.get("/", getAllPorducts);
productRoutes.get("/:productId", getPorductsById);
productRoutes.post("/", createPorduct);
productRoutes.put("/:productId", ugradePorduct);
productRoutes.delete("/:productId", deleteProduct);

export default productRoutes;
