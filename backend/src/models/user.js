import mongoose from "mongoose";
import { composeWithMongoose } from "graphql-compose-mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema({
  username: { type: String, required: true, index: true },
  name: { type: String, required: true },
  password: { type: String, require: true },
});

export const UserModel = mongoose.model("User", UserSchema);

export const UserTC = composeWithMongoose(UserModel).removeField("password");

export default UserModel;