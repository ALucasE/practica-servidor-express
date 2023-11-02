//import { config } from "dotenv"; //const { config } = require("dotenv");
//require("dotenv").config();
import dotenv from "dotenv";
const NODE_ENV = "dev"; // dev || prod
dotenv.config({
  path: `.env.${NODE_ENV}`,
});

const settingDotEnv = () => {
  return {
    port: process.env.PORT,
    host: process.env.HOST,
    db_host: process.env.DB_HOST,
    db_port: process.env.DB_PORT,
    db_user: process.env.DB_USER,
    db_pass: process.env.DB_PASSWORD,
  };
};

//module.exports = { setting };
export default settingDotEnv;
