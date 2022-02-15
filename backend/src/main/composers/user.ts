import { MongoUserRepository } from "../../infra/repositories/mongoDB/mongoUserRepository";
import { encrypter } from "./encrypter";
import { tokenGenerator } from "./tokenGenerator";

import { CreateUserUseCase } from '../../domain/useCases/user/create/createUserUseCase';
import { CreateUserController } from '../../presentation/controllers/user/createUserController';

import { UpdateUserUseCase } from '../../domain/useCases/user/update/updateUserUseCase';
import { UpdateUserController } from '../../presentation/controllers/user/updateUserController';

import { DeleteUserUseCase } from '../../domain/useCases/user/delete/deleteUserUseCase';
import { DeleteUserController } from '../../presentation/controllers/user/deleteUserController';

import { LoginUserUseCase } from '../../domain/useCases/user/login/loginUserUseCase';
import { LoginUserController } from '../../presentation/controllers/user/loginUserController';

const mongoUserRepository = new MongoUserRepository();

const createUserUseCase = new CreateUserUseCase(mongoUserRepository, encrypter);
const createUserController = new CreateUserController(createUserUseCase);

const updateUserUseCase = new UpdateUserUseCase(mongoUserRepository);
const updateUserController = new UpdateUserController(updateUserUseCase);

const deleteUserUseCase = new DeleteUserUseCase(mongoUserRepository);
const deleteUserController = new DeleteUserController(deleteUserUseCase);

const loginUserUseCase = new LoginUserUseCase(mongoUserRepository, encrypter, tokenGenerator);
const loginUserController = new LoginUserController(loginUserUseCase);

export {
  mongoUserRepository,
  createUserController,
  updateUserController,
  deleteUserController,
  loginUserController,
};
