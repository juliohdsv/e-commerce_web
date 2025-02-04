import { Request, Response } from "express";
import { HttpError } from "../../../shared/errors/http-error.class";
import dummyjsonApi  from "../../providers/dummyjsonApi";

class ProductsController{

  async index(request: Request, response: Response){
    const { data } = await dummyjsonApi.get("/products");

    if(!data){
      throw new HttpError(400, "Service with dummyjsonApi don't working");
    }

    const products = data.products;
    return response.status(200).send(products)
  }

  async findById(request: Request, response: Response){
    const { id } = request.params;

    if(!id){
      throw new HttpError(404, "don't have item id");
    }

    const { data } = await dummyjsonApi.get(`/products/${id}`);
    return response.status(200).send(data);
  }
};

export default new ProductsController;
