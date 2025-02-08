import { User } from "../entities/User.entities";

export interface IUserRepository{
  findByEmail(email: string): Promise<User | null>;
  save(user: User): Promise<void>;
}
