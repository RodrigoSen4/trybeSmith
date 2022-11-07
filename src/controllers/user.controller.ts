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

  async login(req: Request, res: Response) {
    const { username, password } = req.body;

    if (!username) return res.status(400).json({ message: '"username" is required' });

    if (!password) return res.status(400).json({ message: '"password" is required' });

    const checkUser = await this.userService.checkUser(req.body);
    if (!checkUser) return res.status(401).json({ message: 'Username or password invalid' });

    const token = createToken(checkUser);
    return res.status(200).json({ token });
  }
}