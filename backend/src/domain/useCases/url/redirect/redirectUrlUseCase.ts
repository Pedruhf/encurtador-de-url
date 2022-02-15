import { IUrlRepository } from "../../../../data/repositories/IUrlRepository";
import { Url } from "../../../entities/url";

class RedirectUrlUseCase {
  constructor (private readonly urlRepository: IUrlRepository) {}

  async execute(code: string): Promise<Url> {
    const url = await this.urlRepository.findByCode(code);
    if (!url) {
      throw new Error("Esta URL encurtada ainda não foi criada");
    }

    url.hitCounter++;
    await this.urlRepository.update(url._id, url);
    return url;
  }
}

export { RedirectUrlUseCase };