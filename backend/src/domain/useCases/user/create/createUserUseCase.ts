import { IEncrypter } from "../../../../data/encrypter/IEncrypter";
import { IUserRepository } from "../../../../data/repositories/IUserRepository";
import { User } from "../../../entities/user";

class CreateUserUseCase {
  constructor (
    private readonly userRepository: IUserRepository,
    private readonly encrypter: IEncrypter
  ) {}

  async execute(userData: Omit<User, "_id">): Promise<void> {
    const userExists = await this.userRepository.findByEmail(userData.email);
    if (userExists) {
      throw new Error("Este e-mail já foi cadastrado");
    }

    userData.password = this.encrypter.encrypt(userData.password as string);
    const user = new User(userData);

    await this.userRepository.save(user);
  }
}

export { CreateUserUseCase };
