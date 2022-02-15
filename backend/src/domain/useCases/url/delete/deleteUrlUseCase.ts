import { IUrlRepository } from "../../../../data/repositories/IUrlRepository";

class DeleteUrlUseCase {
  constructor(private readonly urlRepository: IUrlRepository) {}

  async execute(id: string, userId?: string): Promise<void> {
    console.log(id);
    const urlExists = await this.urlRepository.findById(id);
    if (!urlExists) {
      throw new Error("Url não encontrada");
    }

    if (userId !== urlExists.owner) {
      throw new Error("Você não tem permissão para deletar esta URL");
    }

    await this.urlRepository.delete(id);
  }
}

export { DeleteUrlUseCase };
