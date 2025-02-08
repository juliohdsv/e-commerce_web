import { Router, Request, Response } from "express";
import ProductsController from "../controllers/Products.controller";
import UserController from "../controllers/User.controller";

const router = Router();

router.get("/", (request: Request, response: Response) =>{
  return response.status(200).json({message: "API is running"});
});

router.get("/products", ProductsController.index);
router.get("/products/:id", ProductsController.findById);

router.get("/users", UserController.show);
router.get("/users/:id", UserController.findById);
router.post("/users", UserController.create);


export default router;
