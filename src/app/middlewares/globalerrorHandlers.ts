/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import {Request, Response, NextFunction } from 'express';
/* eslint-disable @typescript-eslint/no-explicit-any */
const globalErrorHandlers = (err: any, req: Request, res: Response, next: NextFunction)=>{
    const statusCode = 500;
    const message = err.message ||'something went wrong';
    return res.status(statusCode).json({
      success: false,
      message,
      error: err,
    })
  }

  export default globalErrorHandlers;