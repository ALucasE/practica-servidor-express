const controller = {};
let msg = "Hola mundo!";
controller.getIndex = (req, res) => {
  console.log(msg);
  res.send(msg);
};

module.exports = controller;
