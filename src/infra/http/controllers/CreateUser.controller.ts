import { Request, Response } from "express";
import { CreateUserUseCase } from "../../../app/use-cases/CreateUser/CreateUserUseCase";

export class CreateUserController{

  constructor(
    private createUserUseCase: CreateUserUseCase
  ){}

  async handle(request: Request, response: Response): Promise<Response>{
    const { name, email, password } = request.body;

    try{
      await this.createUserUseCase.execute({
        name,
        email,
        password
      })

      return response.status(201).send();
    } catch (err){
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }

    // const schema = z.object({
    //   name: z.string().min(1).nonempty(),
    //   email: z.string().email().min(1).nonempty(),
    //   password: z.string().min(6).nonempty()
    // });

    //   const result = schema.safeParse(request.body);

    //   if(!result.success){
    //     throw new HttpError(400, "The all fields required");
    //   }

    // const hashedPassword = await dataHash(result.data.password);
    // const user = new User({...result.data, password: hashedPassword});
    // const token = tokenGenerate(user.id);

    // return response.status(201).send({user, token});
  }
};


