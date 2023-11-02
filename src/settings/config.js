//import { config } from "dotenv"; //const { config } = require("dotenv");
//require("dotenv").config();
import dotenv from "dotenv";
const NODE_ENV = "dev"; // dev || prod
dotenv.config({
  path: `.env.${NODE_ENV}`,
});

const setting = () => {
  return {
    port: process.env.PORT,
    host: process.env.HOST,
    db: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      pass: process.env.DB_PASSWORD,
    },
  };
};

//module.exports = { setting };
export default setting;
