import jwt from "jsonwebtoken";
import { HttpError } from "../../../shared/errors/http-error.class";
import { env } from "../../../shared/utils/env/env";

export const tokenGenerate = (id: string)=> {
 try{
   const token = jwt.sign(
     { id },
     env.JWT_SECRET as string,
     { expiresIn: "1h"}
   );

   return token;
 }catch(err){
  throw new HttpError(401, "Unable generate token");
 }

}

export const isAuthorizated = (token:string)=>{
  try{
    const decoded = jwt.verify(token, env.JWT_SECRET as string);
    return decoded;
  }catch(err){
    throw new HttpError(401, "Invalid or expired token");
  }
}

