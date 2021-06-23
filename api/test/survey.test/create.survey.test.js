import {
  describe,
  it,
  before
} from 'mocha';
import { expect } from 'chai/index';
import httpStatus from 'http-status-codes';
import faker from 'faker';

import clearCollections from '../../utils/clear.collections';
import { createDefaultSurvey, createSurveyObject } from '../../utils/init.data.survey';
import { createDefaultUser, createUserObject, loginUserAgent } from '../../utils/init.data.user';

let agent;

let surveyObj;

describe('POST api/survey', function () {
  before(async () => {
    await clearCollections();

    const userObj = createUserObject();

    await createDefaultUser(userObj);

    agent = await loginUserAgent(userObj);

    surveyObj = createSurveyObject();

    await createDefaultSurvey(surveyObj);
  });

  it('should return status BAD REQUEST, because survey with same url already exist.', async () => {
    await agent
      .post('/api/survey')
      .send(surveyObj)
      .expect(httpStatus.BAD_REQUEST);
  });

  it('should return status CREATED and new user object.', async () => {
    const newSurvey = createSurveyObject({
      name: faker.lorem.word(),
      url: faker.lorem.word(),
      questions: [
        {
          name: faker.lorem.word()
        },
        {
          name: faker.lorem.word()
        }
      ]
    });

    const res = await agent
      .post('/api/survey')
      .send(newSurvey)
      .expect(httpStatus.CREATED);

    expect(res.body).to.be.an('object');
    expect(res.body).has.own.property('name').eq(newSurvey.name);
    expect(res.body).has.own.property('url').eq(newSurvey.url);
    expect(res.body).has.own.property('questions');
    expect(res.body.questions).to.be.an('array').to.have.lengthOf(2);
    expect(res.body.questions[0]).to.have.own.property('name').eq(newSurvey.questions[0].name);
  });
});
