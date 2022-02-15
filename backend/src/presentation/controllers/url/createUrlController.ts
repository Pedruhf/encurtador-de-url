import { Request, Response } from "express";
import { CreateUrlUseCase } from "../../../domain/useCases/url/create/createUrlUseCase";

class CreateUrlController {
  constructor(private readonly createUrlUseCase: CreateUrlUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { originalURL } = req.body;
    const userId = req.userId;

    try {
      const url = await this.createUrlUseCase.execute(originalURL, userId);
      return res.status(201).send(url);
    } catch (error: Error | any) {
      return res.status(400).send({ error: error.message || "Erro ao criar url encurtada" });
    }
  }
}

export { CreateUrlController };