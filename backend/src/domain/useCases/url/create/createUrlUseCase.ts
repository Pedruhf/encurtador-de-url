import { IUrlRepository } from "../../../../data/repositories/IUrlRepository";
import { IUserRepository } from "../../../../data/repositories/IUserRepository";
import { Url } from "../../../entities/url";

class CreateUrlUseCase {
  constructor(
    private readonly urlRepository: IUrlRepository,
    private readonly userRepository: IUserRepository,
  ) {}

  async execute(originalURL: string, userId?: string): Promise<Url> {
    const urlExists = await this.urlRepository.findByUrl(originalURL);
    if (urlExists) {
      return urlExists;
    }

    const newUrl = new Url(originalURL, userId);

    if (userId) {
      const user = await this.userRepository.findById(userId);
      if (!user) {
        throw new Error("Usuário não encontrado");
      }

      user.savedUrls.push(newUrl._id);
      await this.userRepository.update(user._id, user);
    }

    const url = await this.urlRepository.save(newUrl);
    return url;
  }
}

export { CreateUrlUseCase };
