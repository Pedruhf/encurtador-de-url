import { IUserRepository } from "../../../../data/repositories/IUserRepository";

class DeleteUserUseCase {
  constructor (
    private readonly userRepository: IUserRepository,
  ) {}

  async execute(userId: string): Promise<void> {
    const user = await this.userRepository.findById(userId);
    if (!user) {
      throw new Error("Este usuário não existe");
    }

    await this.userRepository.delete(userId);
  }
}

export { DeleteUserUseCase };
