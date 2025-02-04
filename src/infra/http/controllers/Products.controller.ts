import { Request, Response } from "express";
import dummyjsonApi  from "../../providers/dummyjsonApi";

const ProductsController = {

  show: async (request: Request, response: Response)=>{
    const { data } = await dummyjsonApi.get("/products");

    if(!data){
      response.send("Running show");
    }

    const products = data.products;
    response.status(200).send(products)
  }
}

export default ProductsController;
