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
  createDeafultUser,
  loginUser
} from '../../utils/init.data.user';
import clearCollections from '../../utils/clear.collections';

let cookie;
let user;

describe('/user', () => {
  beforeEach(async () => {
    await clearCollections();
    user = await createDeafultUser();
    cookie = await loginUser();
  });
  it('POST api/user/', async () => {
    const res = await request(app)
      .post('/api/user')
      .send(createUser)
      .set('Cookie', cookie)
      .expect(httpStatus.CREATED);
    expect(res.body).to.be.an('object');
    expect(res.body).has.own.property('name');
    expect(res.body).has.own.property('email');
  });
  it('PUT api/user/:id', async () => {
    const res = await request(app)
      .put(`/api/user/${user.id}`)
      .send({
        name: newUser.name,
        email: newUser.email,
        password: newUser.password
      })
      .set('Cookie', cookie)
      .expect(httpStatus.OK);
    expect(res.body).to.be.an('object');
    expect(res.body).has.own.property('n').eq(1);
    expect(res.body).has.own.property('ok').eq(1);
  });
  it('GET api/user/:id', async () => {
    const res = await request(app)
      .get(`/api/user/${user.id}`)
      .set('Cookie', cookie)
      .expect(httpStatus.OK);
    expect(res.body).to.be.an('object');
    expect(res.body).has.own.property('name');
    expect(res.body).has.own.property('email');
  });
});
