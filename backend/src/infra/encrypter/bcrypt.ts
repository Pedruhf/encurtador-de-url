import bcrypt from "bcrypt";
import { IEncrypter } from "../../data/encrypter/IEncrypter";

class Encrypter implements IEncrypter {
  salt: number = 10;

  encrypt(value: string): string {
    const encryptedValue = bcrypt.hashSync(value, this.salt);
    return encryptedValue;
  }
  compareEncrypted(value: string, encryptedValue: string): boolean {
    const isEqual = bcrypt.compareSync(value, encryptedValue);
    return isEqual;
  }
}

export { Encrypter };