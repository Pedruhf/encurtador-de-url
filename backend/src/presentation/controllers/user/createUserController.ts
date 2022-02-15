import { Request, Response } from "express";
import { CreateUserUseCase } from "../../../domain/useCases/user/create/createUserUseCase";

class CreateUserController {
  constructor (private readonly createUserUseCase: CreateUserUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      await this.createUserUseCase.execute(req.body);
      return res.status(201).send();
    } catch (error: Error | any) {
      return res.status(400).send({ error: error.message || "Erro ao realizar cadastro"});
    }
  }
}

export { CreateUserController };
