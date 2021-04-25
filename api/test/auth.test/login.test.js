import { describe, it, before } from 'mocha';
import { expect } from 'chai';
import request from 'supertest';
import bCrypt from 'bcrypt';
import httpStatus from 'http-status';
import clearCollections from '../../utils/clear.collections';
import app from '../../src/index';
import User from '../../models/User';

const name = 'TestUser';
const email = 'test@gmail.com';
const password = '1234567qwe';

async function createUser() {
  const salt = bCrypt.genSaltSync(10);
  const user = await User.create({
    name,
    email,
    password: bCrypt.hashSync(password, salt)
  });
  user.save();
}

describe('POST /login', function (done) {
  // eslint-disable-next-line mocha/no-hooks-for-single-case
  before(async () => {
    await clearCollections();
    await createUser();
  });
  it('responds with status 200', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({
        email,
        password
      })
      .expect('Content-Type', /json/)
      .expect(httpStatus.OK);
  });
});
