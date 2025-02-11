import { CreateUserController } from "../../../infra/http/controllers/CreateUser.controller";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { User } from "../../../domain/entities/User/UserEntitie";
import { IUserRepository } from "../../../domain/repositories/IUserRepository";

export const CreateUserFactory = () =>{

  ;
  const createUser = new CreateUserUseCase(usersRepository);
  const createUserController = new CreateUserController(createUser);

  return createUserController;
};
