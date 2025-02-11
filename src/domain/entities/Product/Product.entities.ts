import { uuid } from "uuidv4";
import { z } from "zod";
import { HttpError } from "../../../shared/errors/http-error.class";

export class Product {
  public readonly id!: string;
  public title: string | undefined
  public description: string | undefined
  public category: string | undefined;
  public price: number | undefined
  public thumbnail: string | undefined

  constructor(props: Omit<Product, "id">, id?: string) {

    const schema = z.object({
      title: z.string().min(1).nonempty(),
      description: z.string().min(1).nonempty(),
      category: z.string().min(1).nonempty(),
      price: z.number(),
      thumbnail: z.string().url().nonempty(),
    });

    const result = schema.safeParse(props);

    if(!result.success){
      throw new HttpError(400, "Invalid user data");
    }

    Object.assign(this, props);

    if(!id){
      this.id = uuid();
    }
  }
}
