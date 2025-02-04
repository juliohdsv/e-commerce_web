import express from "express";
import 'express-async-errors'
import "dotenv/config";

import router from "./infra/http/routes/main.route";
import { errorHandler } from "./shared/errors/errorHandle";

const app = express();
const PORT:number = Number(process.env.PORT) || 3000;
const ENV:string = process.env.ENV || "development";

app.use(express.json());
app.use("/api", router);
app.use(errorHandler);


app.listen(PORT, ()=>
  console.log(`server running in ${ENV} mode on port ${PORT}`)
);
