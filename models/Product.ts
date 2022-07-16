import mongoose, { Schema, model, Model } from "mongoose";
import { IProduct } from "../interfaces";

const productSchema = new Schema(
  {
    description: { type: String, required: true },
    images: [{ type: String }],
    inStock: { type: Number, required: true, default: 0 },
    price: { type: Number, required: true, default: 0 },
    sizes: [
      {
        type: String,
        enum: {
          values: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
          message: "Sizes must be one of the following: S, M, L, XL, XXL",
        },
      },
    ],
    slug: { type: String, required: true, unique: true },
    tags: [{ type: String }],
    title: { type: String, required: true },
    type: {
      type: String,
      enum: {
        values: ['shirts','pants','hoodies','hats'],
        message:
          "Type must be one of the following: top, bottom, dress, shoes, accessory",
      },
    },
    gender: {
      type: String,
      enum: {
        values: ["men", "women", "kid", "unisex"],
        message:
          "Type must be one of the following: top, bottom, dress, shoes, accessory",
      },
    },
  },
  {
    timestamps: true,
  }
);

productSchema.index({title: 'text', tags: 'text'})

const Product: Model<IProduct> = mongoose.models.Product || model<IProduct>("Product", productSchema);

export default Product;