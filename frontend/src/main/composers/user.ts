import { RegisterUserUseCase } from "../../domain/useCases/user/register/registerUserUseCase";
import { LoginUserUseCase } from "../../domain/useCases/user/login/loginUserUseCase";
import { api } from "./api";

const registerUserUseCase = new RegisterUserUseCase(api);

const loginUserUseCase = new LoginUserUseCase(api);

export {
  registerUserUseCase,
  loginUserUseCase
};
