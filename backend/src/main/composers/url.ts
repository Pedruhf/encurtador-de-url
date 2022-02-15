import { MongoUrlRepository } from "../../infra/repositories/mongoDB/mongoUrlRepository";
import { mongoUserRepository } from "./user";

import { CreateUrlUseCase } from "../../domain/useCases/url/create/createUrlUseCase";
import { CreateUrlController } from "../../presentation/controllers/url/createUrlController";

import { DeleteUrlUseCase } from "../../domain/useCases/url/delete/deleteUrlUseCase";
import { DeleteUrlController } from "../../presentation/controllers/url/deleteUrlController";

import { RedirectUrlUseCase } from "../../domain/useCases/url/redirect/redirectUrlUseCase";
import { RedirectUrlController } from "../../presentation/controllers/url/redirectUrlController";

import { GetMostAccessedUrlsUseCase } from "../../domain/useCases/url/getMostAccessed/getMostAccessedUrlsUseCase";
import { GetMostAccessedUrlsController } from "../../presentation/controllers/url/getMostAccessedUrlsController";

const mongoUrlRepository = new MongoUrlRepository();

const createUrlUseCase = new CreateUrlUseCase(mongoUrlRepository, mongoUserRepository);
const createUrlController = new CreateUrlController(createUrlUseCase);

const deleteUrlUseCase = new DeleteUrlUseCase(mongoUrlRepository);
const deleteUrlController = new DeleteUrlController(deleteUrlUseCase);

const redirectUrlUseCase = new RedirectUrlUseCase(mongoUrlRepository);
const redirectUrlController = new RedirectUrlController(redirectUrlUseCase);

const getMostAccessedUrlsUseCase = new GetMostAccessedUrlsUseCase(mongoUrlRepository);
const getMostAccessedUrlsController = new GetMostAccessedUrlsController(getMostAccessedUrlsUseCase);

export {
  mongoUrlRepository,
  createUrlController,
  deleteUrlController,
  redirectUrlController,
  getMostAccessedUrlsController,
};
