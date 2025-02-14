import Jwt from "jsonwebtoken";
import { env } from "../utils/env";

export const tokenGenerate = (id: string)=> {
  return Jwt.sign({id}, env.JWT_SECRET, { expiresIn: 5000});
};
