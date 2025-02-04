import { Request, Response } from "express";

import { HttpError } from "../../../shared/errors/http-error.entity";
import dummyjsonApi  from "../../providers/dummyjsonApi";

const ProductsController = {

  show: async (request: Request, response: Response)=>{
    const { body } = request;
    const { data } = await dummyjsonApi.get("/products");

    if(!data){
      throw new HttpError(400, "Service with dummyjsonApi don't working");
    }

    const products = data.products;
    response.status(200).send(products)
  }
}

export default ProductsController;
