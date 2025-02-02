import { Request, Response } from "express";

const UserController = {

  show:(request: Request, response: Response)=>{
    response.send("Running show");
  }
}

export default UserController;
