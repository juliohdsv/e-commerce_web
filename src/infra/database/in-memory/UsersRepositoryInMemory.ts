import { User } from "../../../domain/entities/User/User.entitie";
import { IUserRepository } from "../../../domain/repositories/IUserRepository";

export class UsersRepositoryInMemory implements IUserRepository{
  findByEmail(email: string): Promise<User | null> {
    throw new Error("Method not implemented.");
  }
  save(user: User): Promise<void> {
    throw new Error("Method not implemented.");
  }
  private users: User[] = [];

  async create(user: User): Promise<User>{
    Object.assign(user);

    this.users.push(user);
    return user;
  }
}
