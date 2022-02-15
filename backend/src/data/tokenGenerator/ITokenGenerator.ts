interface ITokenGenerator {
  generateToken(params?: Object, expires?: number): string;
}

export { ITokenGenerator };
