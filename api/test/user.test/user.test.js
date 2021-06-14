import {
  describe,
  it,
  beforeEach
} from 'mocha';
import { expect } from 'chai/index';
import request from 'supertest';
import httpStatus from 'http-status';
import app from '../../src/index';
import {
  newUser,
  createUser,
  createDefaultUser,
  loginUser, defaultUser
} from '../../utils/init.data.user';
import clearCollections from '../../utils/clear.collections';

let cookie;
let user;

describe('/user', () => {
  const agent = request.agent(app);
  beforeEach(async () => {
    await clearCollections();
    user = await createDefaultUser();
    cookie = await loginUser();
  });
  it('POST api/user/', async () => {
    await agent
      .post('/api/user')
      .send(createUser)
      .set('Cookie', cookie)
      .expect(httpStatus.CREATED)
      .expect((res) => {
        expect(res.body).to.be.an('object');
        expect(res.body).has.own.property('name').eq(createUser.name);
        expect(res.body).has.own.property('email').eq(createUser.email);
      });
  });
  it('PUT api/user/:id', async () => {
    await agent
      .put(`/api/user/${user.id}`)
      .send({
        name: newUser.name,
        email: newUser.email,
        password: newUser.password
      })
      .set('Cookie', cookie)
      .expect(httpStatus.OK)
      .expect((res) => {
        expect(res.body).to.be.an('object');
        expect(res.body).has.own.property('n').eq(1);
        expect(res.body).has.own.property('ok').eq(1);
      });
  });
  it('GET api/user/:id', async () => {
    await agent
      .get(`/api/user/${user.id}`)
      .send()
      .set('Cookie', cookie)
      .expect(httpStatus.OK)
      .expect((res) => {
        expect(res.body).to.be.an('object');
        expect(res.body).has.own.property('name').eq(defaultUser.name);
        expect(res.body).has.own.property('email').eq(defaultUser.email);
      });
  });
});
