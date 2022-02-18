import { Url } from "./url";

class User {
  _id?: string;
  name: string;
  email: string;
  savedUrls?: Url[];
  createdAt?: Date | string;

  constructor() {
    this.name = "";
    this.email = "";
    this.savedUrls = [];
  }
};

export { User };
