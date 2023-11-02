const controller = {};
let msg = "Hola mundo!";

controller.getIndex = (req, res) => {
  console.log(msg);
  res.send(msg);
};

controller.getAll = (req, res) => {
  let msg = "Bienvenidos a todos";
  console.log(msg);
  res.send(msg);
};

export default controller; //module.exports = controller;
