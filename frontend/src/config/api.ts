import TokenHandler from "@/utils/tokenHandler";
import axios, { AxiosInstance } from "axios";

export default class Api {
  public request: AxiosInstance;

  constructor(private readonly tokenHandler: TokenHandler) {
    this.request = axios.create({
      baseURL: process.env.API_HOST || "http://localhost:4000",
      headers: {
        authorization: `bearer ${tokenHandler.getTokenFromLocalStorage()}`
      },
    });
  }  
}

export { Api };
