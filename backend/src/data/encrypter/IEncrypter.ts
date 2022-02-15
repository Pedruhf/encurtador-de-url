interface IEncrypter {
  salt: number;
  encrypt(value: string): string;
  compareEncrypted(value: string, encryptedValue: string): boolean;
}

export { IEncrypter };