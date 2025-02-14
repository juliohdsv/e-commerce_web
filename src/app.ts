import express, { Request, Response } from "express";
import{ prismaClient } from "./database/lib/PrismaClient";
import { User } from "./entities/user.entitie";

const app = express();

app.use(express.json());

type CreateUserBody = {
  name: string;
  email:string;
  password:string;
};

app.post("/users",  async (request: Request, response: Response)=>{
  try {
      const data: CreateUserBody = {...request.body};
      const user = new User(data);
      const newUser = await prismaClient.user.create({
        data: {
        ...user
        },
      });

    return response.status(200).send(newUser);
  } catch(err){
    return response.status(500).json({ error: "Server internal error" });
  }
});

export { app } ;
