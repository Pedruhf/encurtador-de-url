import { IUserRepository } from "../../../../data/repositories/IUserRepository";
import { IUpdateUserRequestDTO } from "./updateUserRequestDTO";

class UpdateUserUseCase {
  constructor (
    private readonly userRepository: IUserRepository
  ) {}

  async execute(userData: IUpdateUserRequestDTO, userId: string): Promise<void> {
    const user = await this.userRepository.findById(userId);
    if (!user) {
      throw new Error("Usuário não encontrado");
    }

    const emailExists = await this.userRepository.findByEmail(userData.email as string);
    if (emailExists && userData.email !== user.email) {
      throw new Error("Este e-mail já está cadastrado");
    }

    user.email = userData.email || user.email;
    user.name = userData.name || user.name;

    await this.userRepository.update(user._id, user);
  }
}

export { UpdateUserUseCase };
