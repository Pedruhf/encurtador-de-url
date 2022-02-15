import { v4 } from "uuid";
import { Url } from "./url";

class User {
  _id: string;
  name: string;
  email: string;
  password?: string;
  savedUrls: string[];
  createdAt?: Date | string;

  constructor (user: Omit<User, "_id">) {
    this._id = v4();
    this.name = user.name;
    this.email = user.email;
    this.password = user.password;
    this.savedUrls = [];
    this.createdAt = new Date().toISOString();
  }
};

export { User };
