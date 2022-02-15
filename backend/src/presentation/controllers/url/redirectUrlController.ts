import { Request, Response } from "express";
import { RedirectUrlUseCase } from "../../../domain/useCases/url/redirect/redirectUrlUseCase";

class RedirectUrlController {
  constructor(private readonly redirectUrlUseCase: RedirectUrlUseCase) {}

  async handle(req: Request, res: Response): Promise<Response | void> {
    const code = req.params.code;
    
    try {
      const url = await this.redirectUrlUseCase.execute(code);
      return res.redirect(url.originalURL);
    } catch (error: Error | any) {
      return res.status(400).send({ error: error.message || "Erro ao redirecionar" });
    }
  }
}

export { RedirectUrlController };