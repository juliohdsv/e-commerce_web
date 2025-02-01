import express, {Request, Response} from "express";
import "dotenv/config";

const app = express();

app.use(express.json());

app.use("/", (request: Request, response: Response) => {
  response.send("Running 👍");
})

export { app };
