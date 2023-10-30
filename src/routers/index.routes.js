const routes = require("express").Router();
const { getIndex } = require("../controllers/index.controllers");

routes.get("/", getIndex);

module.exports = routes;
