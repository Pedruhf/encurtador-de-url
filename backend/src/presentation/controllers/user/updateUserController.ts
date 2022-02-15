import { Request, Response } from "express";
import { IUpdateUserRequestDTO } from "../../../domain/useCases/user/update/updateUserRequestDTO";
import { UpdateUserUseCase } from "../../../domain/useCases/user/update/updateUserUseCase";

class UpdateUserController {
  constructor (private readonly updateUserUseCase: UpdateUserUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const userData: IUpdateUserRequestDTO = {
      email: req.body.email,
      name: req.body.name,
    };
    const userId = req.userId as string;

    try {
      await this.updateUserUseCase.execute(userData, userId);
      return res.send();
    } catch (error: Error | any) {
      return res.status(400).send({ error: error.message || "Erro ao realizar atualização dos dados"});
    }
  }
}

export { UpdateUserController };
