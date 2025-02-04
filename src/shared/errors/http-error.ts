import { Request, Response, NextFunction } from "express";
import { HttpError } from "./http-error.entity";

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {

  const statusCode = err instanceof HttpError ? err.statusCode : 500;
  const stack = err instanceof HttpError ? err.stack : null;
  const message = err instanceof HttpError ? err.message : "Internal Server Error";

  console.log(stack);

  return res.status(statusCode).json({
    status: "error",
    message: message,
  });

};
