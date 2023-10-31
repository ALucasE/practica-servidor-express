const express = require("express");
const app = express();
const { setting } = require("./src/settings/config");
const { port } = setting();

const indexRoutes = require("./src/routers/index.routes");

app.use("/", indexRoutes);
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.listen(port, () => {
  console.log(`Servidor en ejecución en http://${process.env.HOST}:${port}`);
});
