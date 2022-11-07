import jwt from 'jsonwebtoken';
import User from '../interfaces/user.interface';

const secret = 'secret';

const createToken = (data: User) => {
  const { username, password } = data;
  return jwt.sign({ username, password }, secret);
};

export default createToken;