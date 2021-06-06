import User from '../models/User';
import bCrypt from 'bcrypt';
import request from 'supertest';
import app from '../src';
import httpStatus from 'http-status';

const userAuth = {
  name: 'TestUser',
  email: 'test@gmail.com',
  password: '1234567qwe'
};

const createUser = {
  name: 'TestUser1',
  email: 'test1@gmail.com',
  password: '1234567qwe'
};

const defaultUser = {
  name: 'defaultUserName',
  email: 'defaultUser@gmail.com',
  password: '12345678qwe'
};

const newUser = {
  name: 'NewUser',
  email: 'newuser@gmail.com',
  password: '1234567qwe'
};

async function createDeafultUser() {
  try {
    const saltRounds = 10;
    const salt = bCrypt.genSaltSync(saltRounds);
    const { name, email, password } = defaultUser;
    const user = new User({
      name,
      email,
      password: bCrypt.hashSync(password, salt)
    });
    await user.save();
    return user;
  } catch (error) {
    return console.warn(error);
  }
}

async function loginUser() {
  const res = await request(app)
    .post('/api/auth/login')
    .send({
      email: defaultUser.email,
      password: defaultUser.password
    })
    .expect(httpStatus.OK);
  const cookie = res.headers['set-cookie'].pop().split(';')[0];
  return cookie;
}

export {
  userAuth,
  createUser,
  newUser,
  defaultUser,
  createDeafultUser,
  loginUser
};
