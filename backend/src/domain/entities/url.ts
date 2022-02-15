import { v4 } from "uuid";
import config from "../../main/config";

class Url {
  _id: string;
  originalURL: string;
  code: string;
  shortenedURL: string;
  hitCounter: number;
  owner?: string;
  createdAt?: Date | string;

  constructor (originalURL: string, owner?: string) {
    this._id = v4();
    this.originalURL = originalURL;
    this.code = Url.generateCode();
    this.shortenedURL = Url.generateShortenedURL(this.code);
    this.owner = owner;
    this.hitCounter = 0;
    this.createdAt = new Date().toISOString();
  }

  static generateShortenedURL(code: string): string {
    return `${config.APP_URL}/${code}`;  
  }

  static generateCode(): string {
    let code = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 7; i++) {
      const randomCharacter = Math.floor(Math.random() * possible.length);
      code += possible.charAt(randomCharacter);
    }

    return code; 
  }
}

export { Url };