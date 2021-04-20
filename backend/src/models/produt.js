import mongoose from "mongoose";
import { composeWithMongoose } from "graphql-compose-mongoose";

const { Schema } = mongoose;

const Product = new Schema({
  name: { type: String, required: true, index: true },
  media: { type: String, required: true },
  price: { type: Number, require: true },
  stock: { type: Number, require: true },
  category: { type: Staring, required: true },
  brand: { type: Staring, required: true },
});

export const ProductModel = mongoose.model("Product", Product);

// export const UserTC = composeWithMongoose(UserModel).removeField("password");

export default ProductModel;
