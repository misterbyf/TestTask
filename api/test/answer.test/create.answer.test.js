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
import { createAnswerObject } from '../../utils/init.data.answer';

let agent;

let defaultSurvey;

let surveyObj;

describe('POST api/survey/:url', function () {
  before(async () => {
    await clearCollections();

    const userObj = createUserObject();

    await createDefaultUser(userObj);

    agent = await loginUserAgent(userObj);

    surveyObj = createSurveyObject();

    defaultSurvey = await createDefaultSurvey(surveyObj);
  });

  it('should return status NOT FOUND, because survey for such link doesn\'t exist.', async () => {
    const url = faker.lorem.word();

    const data = await createAnswerObject({ survey: defaultSurvey });

    await agent
      .post(`/api/answer/${url}`)
      .send({
        data
      })
      .expect(httpStatus.NOT_FOUND);
  });

  it('should return status OK and answer object.', async () => {
    const data = await createAnswerObject({ survey: defaultSurvey });

    const res = await agent
      .post(`/api/answer/${defaultSurvey.url}`)
      .send({
        data
      })
      .expect(httpStatus.CREATED);

    expect(res.body).to.be.an('object');
    expect(res.body).has.own.property('data');
    expect(res.body.data).to.be.an('object');
    expect(JSON.stringify(res.body.data)).eq(JSON.stringify(data));
  });
});
