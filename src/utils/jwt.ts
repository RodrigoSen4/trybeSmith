import jwt from 'jsonwebtoken';
import User from '../interfaces/user.interface';

const secret = 'secret';

const createToken = (data: User) => {
  const { username, id } = data;
  return jwt.sign({ username, id }, secret);
};

export default createToken;