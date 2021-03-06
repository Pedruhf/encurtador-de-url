export default class TokenHandler {
  private LOCAL_STORAGE_SECRET_KEY = process.env.SECRET_KEY || "encurtador_de_url::secret";

  public getDataFromLocalStorage(): any | null {
    const stringData = localStorage.getItem(this.LOCAL_STORAGE_SECRET_KEY);
    if (!stringData) {
      return null;
    }
    
    const data = JSON.parse(stringData);
    return data;
  }

  public setDataInLocalStorage(payload: any): void {
    localStorage.setItem(this.LOCAL_STORAGE_SECRET_KEY, payload);
  }

  public clearLocalStorage(): void {
    localStorage.removeItem(this.LOCAL_STORAGE_SECRET_KEY);
  }
}

export { TokenHandler };
