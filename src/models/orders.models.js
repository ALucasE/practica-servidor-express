import mongoose, { Schema, model } from "mongoose";
const orderSchema = new Schema(
  {
    client: {
      ref: "Client",
      type: mongoose.Schema.Types.ObjectId,
    }, // Referencia al cliente que hizo el pedido
    product: [
      {
        ref: "Products",
        type: mongoose.Schema.Types.ObjectId,
      },
    ],
    amount: Number,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

orderSchema.pre("save", async function (next) {
  const products = await this.model("Products").find({
    _id: { $in: this.product },
  });
  products.forEach((prod) => {
    this.amount += prod.price;
  });

  next();
});

export default model("Orders", orderSchema);
