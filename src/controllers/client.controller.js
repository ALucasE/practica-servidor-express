import Client from "../models/client.models.js"; //importación de modelo clientes
import { httpError } from "./handleError.controller.js";
import { validateUnique } from "../utils/validacionUnico.js";

/*- - - - - - - - Buscar todos los clientes - - - - - - - -*/
export const getAllClients = async (req, res) => {
  try {
    const clientes = await Client.find().populate("orders");
    //Validación por si esta vació
    if (clientes.length < 1) return res.sendStatus(204);
    res.json(clientes);
  } catch (error) {
    httpError(res, error);
    //return res.status(500).json({ msg: "Ocurrió un error al buscar clientes" });
  }
};

/*- - - - - - - - Buscar un cliente por id - - - - - - - -*/
export const getClientById = async (req, res) => {
  try {
    const { clientId } = req.params;
    const cliente = await Client.findById(clientId).populate("orders");
    //Validacion por si no hay cliente
    if (!cliente) return res.sendStatus(404);
    res.json(cliente);
  } catch (error) {
    httpError(res, error);
    //return res.status(500).json({ msg: "Ocurrió un error al buscar cliente" });
  }
};

/*- - - - - - - - Crear un cliente por id - - - - - - - -*/
export const createClient = async (req, res) => {
  try {
    const { name, mobile } = req.body;
    //Validar cliente existente
    // if (validateUnique("Client", "mobile", mobile)) return res.status(400).json({ msg: "El cliente ingresado ya existía" });
    const isUnique = await validateUnique(mobile, "mobile", "Client");
    console.log(isUnique);
    if (isUnique) {
      //crea nuevo cliente
      const nuevoCliente = new Client({
        name,
        mobile,
      });
      const clienteGuardado = await nuevoCliente.save();
      res.status(201).json(clienteGuardado);
    } else {
      return res.status(400).json({ msg: "El celular ingresado ya existe" });
    }
  } catch (error) {
    httpError(res, error);
    //return res.status(500).json({ msg: "Ocurrió un error al crear cliente" });
  }
};

/*- - - - - - - - Actualizar un cliente por id - - - - - - - -*/
export const updateClient = async (req, res) => {
  try {
    const { clientId } = req.params;
    const cliente = req.body;
    const updateCliente = await Client.findByIdAndUpdate(clientId, cliente, { new: true });
    res.status(200).json(updateCliente);
  } catch (error) {
    httpError(res, error);
    //return res.status(500).json({ msg: "Ocurrió un error al actualizar cliente" });
  }
};

/*- - - - - - - - Eliminar un cliente por id - - - - - - - -*/
export const deleteClient = async (req, res) => {
  try {
    const { clientId } = req.params;
    await Client.findByIdAndDelete(clientId);
    res.status(200).json({ msg: "Cliente eliminado" });
  } catch (error) {
    httpError(res, error);
    //return res.status(500).json({ msg: "Ocurrió un error al eliminar cliente" });
  }
};
