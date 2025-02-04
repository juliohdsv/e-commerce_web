import { Router } from "express";
import ProductsController from "../controllers/Products.controller";
import UserController from "../controllers/User.controller";
import CartsController from "../controllers/Carts.controller";

const router = Router();

router.get("/products", ProductsController.index);
router.get("/products/:id", ProductsController.findById);

router.get("/users", UserController.index);
router.get("/users/:id", UserController.findById);

router.get("/carts", CartsController.index);
router.get("/carts/:id", CartsController.findById);

export default router;
