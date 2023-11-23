import Products from "../models/product.models.js";
import { httpError } from "./handleError.controller.js";
import { validateUnique } from "../utils/validacionUnico.js";

/*- - - - - - - - Buscar todos los clientes - - - - - - - -*/

export const getAllPorducts = async (rec, res) => {
  try {
    const productos = await Products.find();
    //Valida si hay productos
    if (productos.length < 1) return res.sendStatus(204);
    res.json(productos);
  } catch (error) {
    httpError(res, error);
  }
};

/*- - - - - - - - Buscar un cliente por id - - - - - - - -*/

export const getPorductsById = async (req, res) => {
  try {
    const { productId } = req.params;
    const producto = await Products.findById(productId);
    //Validacion por si no hay productos
    if (!producto) return res.sendStatus(404);
    res.json(producto);
  } catch (error) {
    httpError(res, error);
  }
};

/*- - - - - - - - Crear un cliente por id - - - - - - - -*/

export const createPorduct = async (req, res) => {
  try {
    const { name, description, type, price } = req.body;
    //Validar valor unico
    //if (validateUnique("Products", "name", name)) return res.status(400).json({ msg: `El ${name} ya existe` });
    const isUnique = await validateUnique("Products", "name", name);
    if (!isUnique) {
      const nuevoProducto = new Products({
        name,
        description,
        type,
        price,
      });
      const productoGuardado = await nuevoProducto.save();
      res.status(201).json(productoGuardado);
    }
    return res.status(400).json({ msg: `El ${name} ya existe` });
  } catch (error) {
    httpError(res, error);
  }
};

/*- - - - - - - - Actualizar un cliente por id - - - - - - - -*/

export const ugradePorduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const producto = req.body;
    const productoActualizado = await Products.findByIdAndUpdate(productId, producto, { new: true });
    res.status(200).json(productoActualizado);
  } catch (error) {
    httpError(res, error);
  }
};

/*- - - - - - - - Eliminar un cliente por id - - - - - - - -*/

export const deleteProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    await Products.findByIdAndDelete(productId);
    res.status(200).json({ msg: "Producto eliminado" });
  } catch (error) {
    httpError(res, error);
  }
};
