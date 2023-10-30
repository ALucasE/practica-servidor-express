const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

const indexRoutes = require("./src/routers/index.routes");

app.use("/", indexRoutes);
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.listen(port, () => {
  console.log(`Servidor en ejecución en http://${process.env.HOST}:${port}`);
});
