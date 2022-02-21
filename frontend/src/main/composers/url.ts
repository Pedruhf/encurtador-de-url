import { CreateUrlUseCase } from "../../domain/useCases/url/create/createUrlUseCase";
import { GetMostAccessedUrlsUseCase } from "../../domain/useCases/url/getMostAccessedUrls/getMostAccessedUrlsUseCase";
import { api } from "./api";

const createUrlUseCase = new CreateUrlUseCase(api);
const getMostAccessedUrlsUseCase = new GetMostAccessedUrlsUseCase(api);

export {
  createUrlUseCase,
  getMostAccessedUrlsUseCase,
};
