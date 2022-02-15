import { IEncrypter } from "../../../../data/encrypter/IEncrypter";
import { IUserRepository } from "../../../../data/repositories/IUserRepository";
import { ITokenGenerator } from "../../../../data/tokenGenerator/ITokenGenerator";
import { LoginResponseDTO } from "./loginResponseDTO";

class LoginUserUseCase {
  constructor (
    private readonly userRepository: IUserRepository,
    private readonly encrypter: IEncrypter,
    private readonly tokenGenerator: ITokenGenerator,
  ) {}

  async execute(email: string, password: string): Promise<LoginResponseDTO> {
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new Error("E-mail não encontrado");
    }

    if (!password) {
      throw new Error("Informe sua senha");
    }
    
    const equalsPassword = this.encrypter.compareEncrypted(password, user.password as string);
    if(!equalsPassword) {
      throw new Error("Senha incorreta, tente novamente");
    }

    user.password = undefined;

    return {
      user,
      token: this.tokenGenerator.generateToken({ id: user._id }),
    };
  }
}

export { LoginUserUseCase };
