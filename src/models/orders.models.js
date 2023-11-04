import mongoose, { Schema, model } from "mongoose";
const orderSchema = new Schema(
  {
    client: {
      ref: "Client",
      type: mongoose.Schema.Types.ObjectId,
    }, // Referencia al cliente que hizo el pedido
    product: {
      ref: "Products",
      type: mongoose.Schema.Types.ObjectId,
    },
    amount: Number,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Orders", orderSchema);
