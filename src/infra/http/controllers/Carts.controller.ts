import { Request, Response } from "express";
import { HttpError } from "../../../shared/errors/http-error.class";
import dummyjsonApi  from "../../providers/dummyjson.api";

class CartsController{

  async index(request: Request, response: Response){
    const { carts }  = await dummyjsonApi("carts");
    return response.status(200).send(carts);
  }

  async findById(request: Request, response: Response){
    const { id } = request.params;

    if(!id){
      throw new HttpError(404, "don't have item id");
    }

    const data = await dummyjsonApi(`carts/${id}`);
    return response.status(200).send(data);
  }
};

export default new CartsController;
