/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';
import { TErrorSources } from '../interface/error';
import config from '../config';
import { handleZodError } from '../errors/handleZodError';
import handleValidationError from '../errors/handleValidationError';
/* eslint-disable @typescript-eslint/no-explicit-any */

const globalErrorHandlers : ErrorRequestHandler = (err, req, res, next)=>{
    let statusCode = 500
    let message = err.message ||'something went wrong';
    let errorSources: TErrorSources = [
      {
        path: '',
        message: 'something went wrong',
      },
    ]

    if(err instanceof ZodError){
      const simpliederror = handleZodError(err);
      statusCode = simpliederror?.statusCode;
      message = simpliederror?.message;
      errorSources = simpliederror?.errorSources;
    }
    else if(err?.name === 'ValidationError'){
      const simpliederror = handleValidationError(err);
      statusCode = simpliederror?.statusCode;
      message = simpliederror?.message;
      errorSources = simpliederror?.errorSources;
    }

    return res.status(statusCode).json({
      success: false,
      message,
      // err,
      errorSources,
      stack: config.NODE_ENV === 'development'?  err?.stack : null,
      // error: err,
    })
  }

  export default globalErrorHandlers;