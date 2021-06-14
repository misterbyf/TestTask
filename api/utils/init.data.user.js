import User from '../models/User';
import bCrypt from 'bcrypt';
import request from 'supertest';
import app from '../src';
import httpStatus from 'http-status';
import faker from 'faker';

const userAuth = {
  name: faker.name.firstName(),
  email: faker.internet.email(),
  password: faker.internet.password()
};

const createUser = {
  name: faker.name.firstName(),
  email: faker.internet.email(),
  password: faker.internet.password()
};

const defaultUser = {
  name: faker.name.firstName(),
  email: faker.internet.email(),
  password: faker.internet.password()
};

const newUser = {
  name: faker.name.firstName(),
  email: faker.internet.email(),
  password: faker.internet.password()
};

async function createDefaultUser() {
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
  createDefaultUser,
  loginUser
};
