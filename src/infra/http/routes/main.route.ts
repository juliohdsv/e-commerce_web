import { Router } from "express";
import ProductsController from "../controllers/Products.controller";

const router = Router();

router.get("/products", ProductsController.show);

export default router;
