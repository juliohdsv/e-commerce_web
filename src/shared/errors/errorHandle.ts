import { Request, Response, NextFunction } from "express";
import { HttpError } from "./http-error.class";


export const errorHandler = (
  error: unknown,
  request: Request,
  response: Response,
  next: NextFunction
) => {

  let message: string;
  let statusCode: number;
  let stack: string | undefined;

  if (error instanceof HttpError) {

    statusCode = error.statusCode;
    message = error.message;
    stack = process.env.NODE_ENV === "development" ? error.stack : undefined;

    return response.status(statusCode).json({
      status: "error",
      message,
      ...(stack && { stack }),
    });
   }
  //  else {

  //   statusCode = 500;
  //   message = "Internal Server Error";
  //   stack = process.env.NODE_ENV === "development" ? (error as Error).stack : undefined;
  // }


};
