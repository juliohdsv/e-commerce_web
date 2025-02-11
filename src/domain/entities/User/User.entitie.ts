import { uuid } from "uuidv4";
import { z } from "zod";
import { HttpError } from "../../../shared/errors/http-error.class";

export class User{

  public readonly id: string | undefined;
  public name: string | undefined;
  public email: string | undefined;
  public password: string | undefined;

  constructor(props: Omit<User, "id">, id?: string){
    const schema = z.object({
      name: z.string().min(1).nonempty(),
      email: z.string().email().min(1).nonempty(),
      password: z.string().min(6).nonempty()
    });

    const result = schema.safeParse(props);

    if(!result.success){
      throw new HttpError(400, "Invalid user data");
    }

    Object.assign(this, props);

    if(!id){
      this.id = uuid()
    }
  }
}
