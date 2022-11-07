import connection from '../models/connection';
import UserModel from '../models/user.model';
import User from '../interfaces/user.interface';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  async create(user: User):Promise<User> {
    const newUser: User = await this.model.create(user);
    return newUser;
  }
}