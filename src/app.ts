/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Application } from 'express';
const app: Application = express();
import cors from 'cors';
import notFound from './app/middlewares/notFound';
import router from './app/routes';
import globalErrorHandler from './app/middlewares/globalErrorhandler';

// parser

app.use(express.json());
app.use(cors());

// application routes

// app.use('/api/v1/students', StudentRoutes);

app.use('/api/v1', router);

// const test = async(req: Request, res: Response)=>{
//     Promise.reject();
// }
// // Promise.reject();
// app.get('/', test);

// eslint-disable-next-line @typescript-eslint/no-unused-vars

app.use(globalErrorHandler);
app.use(notFound);

export default app;
