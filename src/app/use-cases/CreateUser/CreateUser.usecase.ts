import { User } from "../../../domain/entities/User.entities";
import { tokenGenerate } from "../../middlewares/authMiddleware/auth.middleware";
import { HttpError } from "../../../shared/errors/http-error.class";
import { ICreateUserDTO } from "../../dtos/ICreateUserRequest.dto";

export class CreateUserUseCase{
  constructor(){

  }

  async execute(data: ICreateUserDTO ){

  }
};
