import { Router } from "express";
import ProductsController from "../controllers/Products.controller";

const Route = Router();

Route.get("/", ProductsController.show);

export default Route;
