import { Request, Response } from "express";
import { HttpError } from "../../../shared/errors/http-error.class";
import dummyjsonApi  from "../../providers/dummyjsonApi";

class UserCoontroller{

  async index(request: Request, response: Response){
    const { data } = await dummyjsonApi.get("/user");

    if(!data){
      throw new HttpError(400, "Service with dummyjsonApi don't working");
    }

    const users = data.users;
    return response.status(200).send(users);
  }

  async findById(request: Request, response: Response){
    const { id } = request.params;

    if(!id){
      throw new HttpError(404, "don't have item id");
    }

    const { data } = await dummyjsonApi.get(`/users/${id}`);
    return response.status(200).send(data);
  }
};

export default new UserCoontroller;
