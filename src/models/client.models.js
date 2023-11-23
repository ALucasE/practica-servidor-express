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

// clientSchema.pre("save", function (next) {
//   //ELIMINA CARACTERES ESPECIALES -> Se pueden buscar mas como regex para:
//   if (this.isModified("name")) {
//     this.name = this.name.replace(/[^\w\s]/g, "");
//   }
//   next();
// });

export default model("Client", clientSchema);
