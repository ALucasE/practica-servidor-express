import Client from "../models/client.models.js"; //importación de modelo clientes

/*- - - - - - - - Buscar todos los clientes - - - - - - - -*/
export const getAllClients = async (req, res) => {
  try {
    const clientes = await Client.find();
    res.json(clientes);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Ocurrió un error al buscar clientes" });
  }
};

/*- - - - - - - - Buscar un cliente por id - - - - - - - -*/
export const getClientById = async (req, res) => {
  try {
    const { clientId } = req.params;
    const cliente = await Client.findById(clientId);
    res.json(cliente);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Ocurrió un error al buscar cliente" });
  }
};

/*- - - - - - - - Crear un cliente por id - - - - - - - -*/
export const createClient = async (req, res) => {
  try {
    const { name, mobile } = req.body;
    const nuevoCliente = new Client({
      name,
      mobile,
    });
    const clienteGuardado = await nuevoCliente.save();
    res.status(201).json(clienteGuardado);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Ocurrió un error al crear cliente" });
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
    console.error(error);
    return res.status(500).json({ msg: "Ocurrió un error al actualizar cliente" });
  }
};

/*- - - - - - - - Eliminar un producto por id - - - - - - - -*/
export const deleteClient = async (req, res) => {
  try {
    const { clientId } = req.params;
    await Client.findByIdAndDelete(clientId);
    res.status(200).json({ msg: "Cliente eliminado" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Ocurrió un error al eliminar cliente" });
  }
};
