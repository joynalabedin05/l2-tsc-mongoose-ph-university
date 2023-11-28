/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Application } from 'express';
const app: Application = express();
import cors from 'cors';
import globalErrorHandlers from './app/middlewares/globalerrorHandlers';
import notFound from './app/middlewares/notFound';
import router from './app/routes';

// parser

app.use(express.json());
app.use(cors());

// application routes

// app.use('/api/v1/students', StudentRoutes);

app.use('/api/v1', router);


// eslint-disable-next-line @typescript-eslint/no-unused-vars

app.use(globalErrorHandlers);
app.use(notFound);

export default app;
