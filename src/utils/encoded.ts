import bcrypt from "bcrypt";

export const encoded = (data: string) =>{
  return bcrypt.hashSync(data, 12);
};

export const compareEncoded = (data: string, dataEncoded:string) =>{
  return bcrypt.compareSync(data, dataEncoded);
};
