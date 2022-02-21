import Api from "@/config/api";
import { User } from "@/domain/models/user";
import { ILoginUserResponseDTO } from "./loginUserResponseDTO";

class LoginUserUseCase {
  constructor(private readonly api: Api) {}

  async execute(email: string, password: string): Promise<ILoginUserResponseDTO> {
    const res = await this.api.request.post("users/login", {
      email,
      password
    });

    return {
      user: res.data.user,
      token: res.data.token,
    };
  }
}

export { LoginUserUseCase };
