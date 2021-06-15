import {
  describe,
  it,
  beforeEach
} from 'mocha';
import { expect } from 'chai/index';
import request from 'supertest';
import httpStatus from 'http-status';
import app from '../../src/index';
import clearCollections from '../../utils/clear.collections';
import {userAuth, defaultUser, createDefaultUser, loginUserAgent} from '../../utils/init.data.user';

let agent;

describe('/auth', () => {
  beforeEach(async () => {
    await clearCollections();
    await createDefaultUser();
    agent = await loginUserAgent();
  });
  it('POST api/auth/register', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send(userAuth)
      .expect(httpStatus.CREATED);
    expect(res.body).to.be.an('object');
    expect(res.body).has.own.property('name').eq(userAuth.name);
    expect(res.body).has.own.property('email').eq(userAuth.email);
  });
  it('POST api/auth/login', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({
        email: defaultUser.email,
        password: defaultUser.password
      })
      .expect(httpStatus.OK);
    expect(res.body).to.be.an('object');
    expect(res.body).has.own.property('name').eq(defaultUser.name);
    expect(res.body).has.own.property('email').eq(defaultUser.email);
  });
  it('GET api/auth/logout', async () => {
    await agent
      .get('/api/auth/logout')
      .send()
      .expect(httpStatus.OK);
  });
});
