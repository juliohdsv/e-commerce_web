import { ICreateUserRequestDTO } from "../../dtos/ICreateUserRequest.dto";
import { IUserRepository } from "../../../domain/repositories/IUserRepository";
import { HttpError } from "../../../shared/errors/http-error.class";
import { User } from "../../../domain/entities/User/User.entitie";

export class CreateUserUseCase{
  constructor(
    private usersRepository: IUserRepository,
  ){}

  async execute(data: ICreateUserRequestDTO ){
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email);

    if(userAlreadyExists){
      throw new HttpError(409, "User already exists");
    }

    const user = new User(data);
    console.log(user);
  }
}
