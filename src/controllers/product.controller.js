import Products from "../models/product.models.js";
import { httpError } from "./handleError.controller.js";
import { validateUnique } from "../utils/validacionUnico.js";

/*- - - - - - - - Buscar todos los clientes - - - - - - - -*/

export const getAllPorducts = async (rec, res) => {
  try {
    const productos = await Products.find();
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
    if (validateUnique("Products", "name", name)) return res.status(400).json({ msg: `El ${name} ya existe` });
    const nuevoProducto = new Products({
      name,
      description,
      type,
      price,
    });
    const productoGuardado = await nuevoProducto.save();
    res.status(201).json(productoGuardado);
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
