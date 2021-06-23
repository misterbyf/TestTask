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

describe('POST api/survey/:url/:id', function () {
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
      .get(`/api/answer/${url}/${defaultAnswer._id}`)
      .send()
      .expect(httpStatus.NOT_FOUND);
  });

  it('should return status NOT FOUND, because answer for such id doesn\'t exist.', async () => {
    const id = mongoose.Types.ObjectId();

    await agent
      .get(`/api/answer/${defaultSurvey.url}/${id}`)
      .send()
      .expect(httpStatus.NOT_FOUND);
  });

  it('should return status OK and answer object.', async () => {
    const res = await agent
      .get(`/api/answer/${defaultSurvey.url}/${defaultAnswer._id}`)
      .send()
      .expect(httpStatus.OK);

    expect(res.body).to.be.an('object');
    expect(res.body).has.own.property('data');
    expect(res.body.data).to.be.an('object');
    expect(JSON.stringify(res.body.data)).eq(JSON.stringify(defaultAnswer.data));
  });
});
