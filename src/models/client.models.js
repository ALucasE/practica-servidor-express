import mongoose, { Schema, model } from "mongoose";
const clientSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    mobile: {
      type: Number,
      unique: true,
      required: true,
      trim: true,
    },
    orders: [
      {
        ref: "Orders",
        type: mongoose.Schema.Types.ObjectId,
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Client", clientSchema);
