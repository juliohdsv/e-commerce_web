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

    if(!id){
      throw new HttpError(404, "don't have item id");
    }

    const data = await dummyjsonApi(`users/${id}`);
    return response.status(200).send(data);
  }
};

export default new UserCoontroller;
