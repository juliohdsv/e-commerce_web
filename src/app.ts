import express, { Request, Response } from "express";
import{ prismaClient } from "./database/lib/PrismaClient";
import { encoded } from "./utils/encoded";

const app = express();

app.use(express.json());

type CreateUserBody = {
  name: string;
  email:string;
  password:string;
};

app.post("/users",  async (request: Request, response: Response)=>{
  const { email, name, password } = request.body;
  const passworHash = encoded(password);
  const newUser = await prismaClient.user.create({
    data: {
      name,
      email,
      password: passworHash,
    }
  });

  return response.status(200).send(newUser);
});


export { app } ;
