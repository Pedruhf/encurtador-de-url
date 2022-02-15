import mongoose from "mongoose";
import { Url } from "../../../../domain/entities/url";

const urlSchema = new mongoose.Schema<Url>({
  _id: {
    type: String,
    unique: true,
    required: true,
  },
  originalURL: {
    type: String,
    required: true,
    unique: true,
  },
  code: {
    type: String,
    required: true,
    unique: true,
  },
  shortenedURL: {
    type: String,
    required: true,
    unique: true,
  },
  hitCounter: {
    type: Number,
    default: 0,
  },
  owner: {
    type: String,
    required: false,
  },
  createdAt: {
    type: String,
    default: new Date().toISOString(),
  },
});

const mongoUrlModel = mongoose.model("Url", urlSchema);

export { mongoUrlModel };