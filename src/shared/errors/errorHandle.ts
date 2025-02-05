import { Request, Response, NextFunction } from "express";
import { HttpError } from "./http-error.class";


export const errorHandler = (
  err: unknown,
  request: Request,
  response: Response,
  next: NextFunction
) => {

  const statusCode = err instanceof HttpError ? err.statusCode : 500;
  const stack = process.env.NODE_ENV !== "production" && err instanceof Error ? err.stack : undefined;
  const message = err instanceof HttpError ? err.message : "Internal Server Error";

  console.log(err);

  response.status(statusCode).json({
    status: "error",
    message,
    ...(stack && { stack }),
  });

  next();
};
