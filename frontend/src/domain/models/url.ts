class Url {
  _id?: string;
  originalURL: string;
  code: string;
  shortenedURL: string;
  hitCounter: number;
  owner?: string;
  createdAt?: Date | string;

  constructor() {
    this.originalURL = "";
    this.code = "";
    this.shortenedURL = "";
    this.hitCounter = 0;
  }
};

export { Url };