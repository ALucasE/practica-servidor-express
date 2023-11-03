import bcrypt from "bcryptjs";
import { Schema, model } from "mongoose";
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    roles: [
      {
        ref: "Role",
        type: Schema.Types.ObjectId,
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

//npm i bcryptjs - https://www.npmjs.com/package/bcryptjs
userSchema.statics.encryptPassword = async (password) => {
  const salt = bcrypt.genSaltSync(); //Crea el salt(las vueltas que encripta)
  return await bcrypt.hashSync(password, salt); //Devuelve el password encriptado
};
//Comparacion del password recibido con el encriptado
userSchema.statics.comparePassword = async (password, receivedPasswaord) => {
  return await bcrypt.compare(password, receivedPasswaord);
};

export default model("User", userSchema);
