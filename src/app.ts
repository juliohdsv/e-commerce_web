import express from "express";
import Route from "./infra/routes/main.route";
import "dotenv/config";

const app = express();

app.use(express.json());
app.use("/", Route);

export { app };
