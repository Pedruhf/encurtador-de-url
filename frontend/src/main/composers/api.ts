import { Api } from "../../config/api";
import { TokenHandler } from "../utils/tokenHandler";

const tokenHandler = new TokenHandler();
const api = new Api(tokenHandler);

export { api, tokenHandler };
