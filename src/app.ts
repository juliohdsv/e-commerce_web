import express from "express";
import 'express-async-errors'
import "dotenv/config";

import router from "./infra/http/routes/main.route";
import { errorHandler } from "./shared/errors/errorHandle";

const app = express();

app.use(express.json());
app.use("/api", router);
app.use(errorHandler);

export { app } ;
