import { User } from "../entities/User/User.entitie";

export interface IUserRepository{
  findByEmail(email: string): Promise<User | null>;
  save(user: User): Promise<void>;
}
