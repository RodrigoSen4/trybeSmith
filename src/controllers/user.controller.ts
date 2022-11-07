import { Request, Response } from 'express';
import UserService from '../service/user.service';
import createToken from '../utils/jwt';

export default class UserController {
  constructor(private userService = new UserService()) { }

  async create(req: Request, res: Response) {
    const user = req.body;
    const userCreate = await this.userService.create(user);
    const token = createToken(userCreate);

    res.status(201).json({ token });
  }
}