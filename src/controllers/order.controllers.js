import Orders from "../models/orders.models.js";
import Products from "../models/product.models.js";
import Client from "../models/client.models.js";
import { httpError } from "./handleError.controller.js";

/*- - - - - - - - Crear un nuevo pedido - - - - - - - -*/
export const createOrder = async (req, res) => {
  try {
    const { clientId, productId, amount } = req.body;

    // Verifica si el cliente y el producto existen
    const cliente = await Client.findById(clientId);
    const producto = await Products.findById(productId);

    if (!cliente) {
      return res.status(404).json({ error: "Cliente no encontrado" });
    }

    if (!producto) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    // Crea un nuevo pedido
    const pedido = new Orders({
      client: clientId,
      product: productId,
      amount,
    });

    await pedido.save();
    await cliente.orders.push(pedido._id);
    await cliente.save();
    res.status(201).json(pedido);
  } catch (err) {
    httpError(res, err);
  }
};
/*- - - - - - - - Actualizar un pedido por ID - - - - - - - -*/

export const updateOrder = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { amount, productId } = req.body;

    // Verifica si el pedido existe
    const pedido = await Orders.findById(orderId);

    if (!pedido) {
      return res.status(404).json({ error: "Pedido no encontrado" });
    }

    // Verifica si el producto existe
    const producto = await Products.findById(productId);

    if (!producto) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    // Actualiza la cantidad y el producto del pedido
    pedido.amount = amount;
    pedido.product = productId;
    await pedido.save();

    res.json(pedido);
  } catch (err) {
    httpError(res, err);
  }
};

/*- - - - - - - - Buscar todos los pedidos - - - - - - - -*/

export const getAllOrders = async (req, res) => {
  try {
    const pedidos = await Orders.find().populate("client product");
    res.json(pedidos);
  } catch (err) {
    httpError(res, err);
  }
};

/*- - - - - - - - Buscar un pedido por Id - - - - - - - -*/

export const getOrderById = async (req, res) => {
  try {
    const { orderId } = req.params;
    const pedido = await Orders.findById(orderId).populate("client product");
    if (!pedido) {
      return res.status(404).json({ error: "Pedido no encontrado" });
    }
    res.json(pedidos);
  } catch (err) {
    httpError(res, err);
  }
};

/*- - - - - - - - Buscar un pedido por cliente - - - - - - - -*/

export const getOrderByClientId = async (req, res) => {
  try {
    const { clientId } = req.params;

    const pedidos = await Orders.find({ client: clientId }).populate("client product");

    res.json(pedidos);
  } catch (err) {
    httpError(res, err);
  }
};

/*- - - - - - - - Buscar todos los clientes - - - - - - - -*/
