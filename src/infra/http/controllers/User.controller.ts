import { Request, Response } from "express";
import { HttpError } from "../../../shared/errors/http-error.class";
import dummyjsonApi  from "../../providers/dummyjson.api";

class UserCoontroller{

  async index(request: Request, response: Response){
    const { users } = await dummyjsonApi("user");
    return response.status(200).send(users);
  }

  async findById(request: Request, response: Response){
    const { id } = request.params;
    const data = await dummyjsonApi(`users/${id}`);

    if(!data){throw new HttpError(404, "User not found");}

    return response.status(200).send(data);
  }
};

export default new UserCoontroller;
