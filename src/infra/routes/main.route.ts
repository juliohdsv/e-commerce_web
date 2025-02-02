import { Router, NextFunction } from "express";
import UserController from "../controllers/User.controller";

const Route = Router();

Route.get("/", UserController.show);

export default Route;
