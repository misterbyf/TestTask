import {
  describe,
  it,
  before
} from 'mocha';
import { expect } from 'chai/index';
import httpStatus from 'http-status-codes';
import faker from 'faker';

import clearCollections from '../../utils/clear.collections';
import { createDefaultUser, createUserObject, loginUserAgent } from '../../utils/init.data.user';

let agent;

let userObj;

describe('POST api/user', function () {
  before(async () => {
    await clearCollections();

    userObj = createUserObject();

    await createDefaultUser(userObj);

    agent = await loginUserAgent(userObj);
  });

  it('should return status BAD REQUEST, because user already created.', async () => {
    await agent
      .post('/api/user')
      .send(userObj)
      .expect(httpStatus.BAD_REQUEST);
  });

  it('should return status CREATED and user object.', async () => {
    const newUser = createUserObject({
      name: faker.name.firstName(),
      email: faker.internet.email(),
      password: faker.internet.password()
    });

    const res = await agent
      .post('/api/user')
      .send(newUser)
      .expect(httpStatus.CREATED);

    expect(res.body).to.be.an('object');
    expect(res.body).has.own.property('name').eq(newUser.name);
    expect(res.body).has.own.property('email').eq(newUser.email);
  });
});
