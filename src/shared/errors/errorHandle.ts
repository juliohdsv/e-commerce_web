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

    statusCode = error.status;
    message = error.message;
    stack = process.env.NODE_ENV === "development" ? error.stack : undefined;

    return response.status(statusCode).json({
      status: "error",
      message,
      ...(stack && { stack }),
    });
  }

  statusCode = 500;
  message = "Internal Server Error";
  stack = process.env.NODE_ENV === "development" ? (error as Error).stack : undefined;
};
