import { v4 as uuid } from 'uuid';
import { tokenGenerate } from "../middlewares/auth.middleware";
import { encoded } from "../utils/encoded";

export class User{
  public readonly id: string;
  public name?: string;
  public email?: string;
  public password?: string;
  public readonly token: string;

  constructor(
    props: Omit<User, "id" | "token">,
    id?: string
  ) {
    this.id = id ?? uuid();
    this.name = props.name;
    this.email = props.email;
    this.password = props.password ? encoded(props.password) : undefined;
    this.token = this.tokenGenerate();
  }

  private tokenGenerate(): string {
    return tokenGenerate(this.id);
  }
}


