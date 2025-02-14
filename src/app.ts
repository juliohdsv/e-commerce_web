import express, { Request, Response } from "express";
import { z } from 'zod';
import{ prismaClient } from "./database/lib/PrismaClient";
import { User } from "./entities/User.entitie";

const app = express();

app.use(express.json());

const createUserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
});

const createUsersBatchSchema = z.object({
  users: z.array(z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
  }))
});


app.post("/users",  async (request: Request, response: Response)=>{
  try {
      const data = createUserSchema.parse(request.body);
      const user = new User(data);
      const newUser = await prismaClient.user.create({
        data: user,
        select: {
          id: true,
        },
      });

    return response.status(200).send(newUser);
  } catch(err){
    return response.status(500).json({ error: "Server internal error" });
  }
});

app.post("/users/batch",  async (request: Request, response: Response)=>{
  try {
    const { users } = createUsersBatchSchema.parse(request.body);
    const usersList: User[] = [];

    users.map((item) => {
      const userList = new User(item);
      usersList.push(userList);
    });

    await prismaClient.user.createMany({
      data: usersList,
    });

    return response.status(201).send();
  } catch(err){
    return response.status(500).json({ error: "Server internal error" });
  }
});

export { app } ;
