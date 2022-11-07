import { Router } from 'express';
import UserController from '../controllers/user.controller';

const loginRouter = Router();

const loginController = new UserController();

loginRouter.post('/', (req, res) => loginController.login(req, res));

export default loginRouter;