export default class TokenHandler {
  private LOCAL_STORAGE_SECRET_KEY = process.env.SECRET_KEY || "encurtador_de_url::secret";

  public getTokenFromLocalStorage(): string | null {
    const token = localStorage.getItem(this.LOCAL_STORAGE_SECRET_KEY);
    return token;
  }

  public setTokenInLocalStorage(payload: any): void {
    localStorage.setItem(this.LOCAL_STORAGE_SECRET_KEY, payload);
  }

  public clearLocalStorage(): void {
    localStorage.removeItem(this.LOCAL_STORAGE_SECRET_KEY);
  }
}

export { TokenHandler };
