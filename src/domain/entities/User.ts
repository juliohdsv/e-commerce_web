import { v4 as uuidv4 } from "uuid";

export class User{

  public readonly id: string;
  public name: string;
  public email: string;
  public password: string;

  constructor(props: Omit<User, "id">, id?: string){
    this.id = id ?? uuidv4();
    this.name = props.name;
    this.email = props.email;
    this.password = props.password;
  }
}
