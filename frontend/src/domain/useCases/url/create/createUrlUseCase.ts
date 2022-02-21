import Api from "@/config/api";
import { Url } from "@/domain/models/url";

class CreateUrlUseCase {
  constructor (private readonly api: Api) {}

  async execute(originalURL: string, requestURL: string = ""): Promise<Url> {
    const res = await this.api.request.post(`${requestURL}`, {
      originalURL,
    });

    return res.data;
  }
}

export { CreateUrlUseCase };
