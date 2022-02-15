import { ITokenGenerator } from "../../data/tokenGenerator/ITokenGenerator";
import jwt from "jsonwebtoken";
import config from "../../main/config";
const secret = config.SECRET_KEY;

class TokenGenerator implements ITokenGenerator {
  generateToken(params: Object = {}, expires: number = 86400): string {
    const token = jwt.sign(params, secret, { expiresIn: expires });
    return token;
  }
}

export { TokenGenerator };
