import { Request, Response } from "express";
import { DeleteUrlUseCase } from "../../../domain/useCases/url/delete/deleteUrlUseCase";

class DeleteUrlController {
  constructor(private readonly deleteUrlUseCase: DeleteUrlUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;
    const userId = req.userId;
    
    try {
      await this.deleteUrlUseCase.execute(id, userId);
      return res.send();
    } catch (error: Error | any) {
      return res.status(400).send({ error: error.message || "Erro ao deletar url" });
    }
  }
}

export { DeleteUrlController };