import express, { NextFunction, Request, Response } from 'express';
import { UserController } from './user.controller';

const router = express.Router();

const shenaBahini = (req: Request, res: Response, next: NextFunction)=>{
    console.log('i am ashenabahini');
    next();
}


router.post('/create-student',shenaBahini,  UserController.createStudent);

export const UserRoutes = router;
