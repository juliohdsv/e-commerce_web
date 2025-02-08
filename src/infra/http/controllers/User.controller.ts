import { Request, Response } from "express";
import { z } from "zod";

import { User } from "../../../domain/entities/User.entities";
import { tokenGenerate } from "../../../app/middlewares/authMiddleware/auth.middleware";
import { dataHash } from "../../../shared/utils/crypt/crypt";
import { HttpError } from "../../../shared/errors/http-error.class";
import dummyjsonApi  from "../../providers/dummyjson.api";

class UserCoontroller{

  async show(request: Request, response: Response): Promise<Response>{

    // const { users } = await dummyjsonApi("user");
    // return response.status(200).send(users);
  }

  async findById(request: Request, response: Response){
    const { id } = request.params;
    const data = await dummyjsonApi(`users/${id}`);

    if(!data){throw new HttpError(404, "User not found");}

    return response.status(200).send(data);
  }

  async create(request: Request, response: Response){
    const schema = z.object({
      name: z.string().min(1).nonempty(),
      email: z.string().email().min(1).nonempty(),
      password: z.string().min(6).nonempty()
    });

      const result = schema.safeParse(request.body);

      if(!result.success){
        throw new HttpError(400, "The all fields required");
      }

    const hashedPassword = await dataHash(result.data.password);
    const user = new User({...result.data, password: hashedPassword});
    const token = tokenGenerate(user.id);

    return response.status(201).send({user, token});
  }
};

export default new UserCoontroller;
