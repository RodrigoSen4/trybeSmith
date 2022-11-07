import { Router } from 'express';
import UserController from '../controllers/user.controller';

const userRouter = Router();

const userControler = new UserController();

userRouter.post('/', (req, res) => userControler.create(req, res));

export default userRouter;