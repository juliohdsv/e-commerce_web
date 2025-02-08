import jwt from "jsonwebtoken";
import { HttpError } from "../../errors/http-error.class";

export const tokenGenerate = (id: string)=> {
 try{
   const token = jwt.sign(
     { id },
     process.env.JWT_SECRET as string,
     { expiresIn: "1h"}
   );

   return token;
 }catch(err){
  throw new HttpError(401, "Unable generate token");
 }

}

export const tokenCompare = (token:string)=>{
  try{
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    return decoded;
  }catch(err){
    throw new HttpError(401, "Invalid or expired token");
  }
}

