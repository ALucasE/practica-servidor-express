/*- - - - - - - - Configuración de variables de entornos - - - - - - - -*/
import dotenv from "dotenv";
const NODE_ENV = "dev"; // dev || prod
dotenv.config({
  path: `.env.${NODE_ENV}`,
});

/*- - - - - - - - Variables de entornos tomadas de .env.dev || .env.prod - - - - - - - -*/
const settingDotEnv = () => {
  return {
    port: process.env.PORT,
    host: process.env.HOST,
    db_host: process.env.DB_HOST,
    db_user: process.env.DB_USER,
    db_pass: process.env.DB_PASSWORD,
    db_uri: process.env.DB_URI,
    db_name: process.env.DB_NAME,
    jwtkey: process.env.JWT_KEY,
  };
};

export default settingDotEnv;
