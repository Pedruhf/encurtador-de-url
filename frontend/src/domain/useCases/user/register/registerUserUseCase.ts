import Api from "@/config/api";
import { IRegisterUserRequestoDTO } from "./registerUserRequestoDTO";

class RegisterUserUseCase {
  constructor(private readonly api: Api) {}

  async execute(userData: IRegisterUserRequestoDTO): Promise<void> {
    await this.api.request.post("users", userData);
  }
}

export { RegisterUserUseCase };
