import express from "express";
import Route from "./infra/http/routes/main.route";
import "dotenv/config";

const app = express();
const PORT:number = Number(process.env.PORT) || 3000;
const ENV:string = process.env.ENV || "development";

app.use(express.json());
app.use("/", Route);

app.listen(PORT, ()=>
  console.log(`server running in ${ENV} mode on port ${PORT}`)
);
