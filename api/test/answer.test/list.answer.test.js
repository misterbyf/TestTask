import {
  describe,
  it,
  before
} from 'mocha';
import { expect } from 'chai/index';
import httpStatus from 'http-status-codes';
import faker from 'faker';
import mongoose from 'mongoose';

import clearCollections from '../../utils/clear.collections';
import { createDefaultSurvey, createSurveyObject } from '../../utils/init.data.survey';
import { createDefaultUser, createUserObject, loginUserAgent } from '../../utils/init.data.user';
import { createDefaultAnswer } from '../../utils/init.data.answer';

let agent;

let surveyObj;

let defaultUser;

let defaultSurvey;

let defaultAnswer;

describe('POST api/survey/:url', function () {
  before(async () => {
    await clearCollections();

    const userObj = createUserObject();

    defaultUser = await createDefaultUser(userObj);

    agent = await loginUserAgent(userObj);

    surveyObj = createSurveyObject();

    defaultSurvey = await createDefaultSurvey(surveyObj);

    defaultAnswer = await createDefaultAnswer({ user: defaultUser, survey: defaultSurvey });
  });

  it('should return status NOT FOUND, because survey for such link doesn\'t exist.', async () => {
    const url = faker.lorem.word();

    await agent
      .get(`/api/answer/${url}/`)
      .send()
      .expect(httpStatus.NOT_FOUND);
  });

  it('should return status OK and answers array.', async () => {
    const res = await agent
      .get(`/api/answer/${defaultSurvey.url}/`)
      .send()
      .expect(httpStatus.OK);

    defaultAnswer.survey = defaultSurvey;

    expect(res.body).to.be.an('array').to.have.lengthOf(1);
    expect(JSON.stringify(res.body[0])).eq(JSON.stringify(defaultAnswer));
  });
});
