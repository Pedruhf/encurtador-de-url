import { Request, Response } from "express";
import { GetMostAccessedUrlsUseCase } from "../../../domain/useCases/url/getMostAccessed/getMostAccessedUrlsUseCase";

class GetMostAccessedUrlsController {
  constructor(private readonly getMostAccessedUrlsUseCase: GetMostAccessedUrlsUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const urls = await this.getMostAccessedUrlsUseCase.execute();
      return res.send(urls);
    } catch (error: Error | any) {
      return res.status(400).send({ error: error.message || "Erro ao tentar obter URL's" });
    }
  }
}

export { GetMostAccessedUrlsController }