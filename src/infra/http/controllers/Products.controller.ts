import { Request, Response } from "express";

import { HttpError } from "../../../shared/errors/http-error.class";
import dummyjsonApi  from "../../providers/dummyjsonApi";

class ProductsController{

  async show(request: Request, response: Response){
    const { data } = await dummyjsonApi.get("/products");

    if(!data){
      throw new HttpError(400, "Service with dummyjsonApi don't working");
    }

    const products = data.products;
    response.status(200).send(products)
  }
};

export default new ProductsController;
