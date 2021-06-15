import {
  describe,
  it,
  beforeEach
} from 'mocha';
import { expect } from 'chai/index';
import httpStatus from 'http-status';
import {
  newUser,
  createUser,
  createDefaultUser,
  defaultUser, loginUserAgent
} from '../../utils/init.data.user';
import clearCollections from '../../utils/clear.collections';

let user;
let agent;

describe('/user', () => {
  beforeEach(async () => {
    await clearCollections();
    user = await createDefaultUser();
    agent = await loginUserAgent();
  });
  it('POST api/user/', async () => {
    await agent
      .post('/api/user')
      .send(createUser)
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
      .expect(httpStatus.OK)
      .expect((res) => {
        expect(res.body).to.be.an('object');
        expect(res.body).has.own.property('name').eq(defaultUser.name);
        expect(res.body).has.own.property('email').eq(defaultUser.email);
      });
  });
});
