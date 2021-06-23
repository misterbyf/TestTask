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

let agent;

let surveyObj;

let defaultSurvey;

describe('GET api/survey/:id', function () {
  before(async () => {
    await clearCollections();

    const userObj = createUserObject();

    await createDefaultUser(userObj);

    agent = await loginUserAgent(userObj);

    surveyObj = createSurveyObject();

    defaultSurvey = await createDefaultSurvey(surveyObj);
  });

  it('should return status NOT FOUND, because survey with same id was not created.', async () => {
    const id = mongoose.Types.ObjectId();

    await agent
      .get(`/api/survey/${id}`)
      .send()
      .expect(httpStatus.NOT_FOUND);
  });

  it('should return status OK and survey object.', async () => {
    const res = await agent
      .get(`/api/survey/${defaultSurvey._id}`)
      .send()
      .expect(httpStatus.OK);

    expect(res.body).to.be.an('object');
    expect(res.body).has.own.property('name').eq(defaultSurvey.name);
    expect(res.body).has.own.property('url').eq(defaultSurvey.url);
    expect(res.body).has.own.property('questions');
    expect(res.body.questions).to.be.an('array').to.have.lengthOf(4);
    expect(res.body.questions[0]).to.have.own.property('name').eq(defaultSurvey.questions[0].name);
  });
});