import { Request, Response } from "express";
import { DeleteUserUseCase } from "../../../domain/useCases/user/delete/deleteUserUseCase";

class DeleteUserController {
  constructor (private readonly deleteUserUseCase: DeleteUserUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const userId = req.userId as string;

    try {
      await this.deleteUserUseCase.execute(userId);
      return res.send();
    } catch (error: Error | any) {
      return res.status(400).send({ error: error.message || "Erro ao realizar deleção"});
    }
  }
}

export { DeleteUserController };
