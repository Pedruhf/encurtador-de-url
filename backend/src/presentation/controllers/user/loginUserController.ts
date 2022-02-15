import { Request, Response } from "express";
import { LoginUserUseCase } from "../../../domain/useCases/user/login/loginUserUseCase";

class LoginUserController {
  constructor (private readonly loginUserUseCase: LoginUserUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    try {
      const user = await this.loginUserUseCase.execute(email, password);
      return res.send(user);
    } catch (error: Error | any) {
      return res.status(400).send({ error: error.message || "Erro ao realizar login"});
    }
  }
}

export { LoginUserController };
