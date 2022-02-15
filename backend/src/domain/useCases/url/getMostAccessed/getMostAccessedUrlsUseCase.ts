import { IUrlRepository } from "../../../../data/repositories/IUrlRepository";
import { Url } from "../../../entities/url";

class GetMostAccessedUrlsUseCase {
  constructor(private readonly urlRepository: IUrlRepository) {}

  async execute(): Promise<Url[]> {
    const urls = await this.urlRepository.findMostAccessed();
    return urls;
  }
}

export { GetMostAccessedUrlsUseCase };