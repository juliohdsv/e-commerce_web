import bcrypt from "bcrypt";

export const dataHash = async (data:string)=> {
  return await bcrypt.hash(data, 10);
}
