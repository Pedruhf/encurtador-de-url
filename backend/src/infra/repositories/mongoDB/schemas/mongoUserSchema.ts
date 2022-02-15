import mongoose from "mongoose";
import { User } from "../../../../domain/entities/user";

const userSchema = new mongoose.Schema<User>({
  _id: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    select: false,
  },
  name: {
    type: String,
    required: true,
    match: /^[a-zA-Z ]+$/,
  },
  savedUrls: [{
    type: String,
    ref: "Url",
  }],
  createdAt: {
    type: String,
    default: new Date().toISOString(),
  },
});

const mongoUserModel = mongoose.model("User", userSchema);

export { mongoUserModel };