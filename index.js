const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hola Mundo!");
});

app.listen(port, () => {
  console.log(`Servidor en ejecución en http://${process.env.host}:${port}`);
});
