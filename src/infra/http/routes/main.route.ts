import { Router, Request, Response } from "express";
import { CreateUserController } from "../controllers/CreateUser.controller";


const router = Router();

router.post("/users", (request: Request, response: Response) =>
  CreateUserController.handle(request, response)
);

export default router;
