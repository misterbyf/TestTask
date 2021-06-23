import {
  describe,
  it,
  before
} from 'mocha';
import { expect } from 'chai/index';
import httpStatus from 'http-status-codes';
import faker from 'faker';
import mongoose from 'mongoose';

import Survey from '../../models/Survey';

import clearCollections from '../../utils/clear.collections';
import { createDefaultSurvey, createSurveyObject } from '../../utils/init.data.survey';
import { createDefaultUser, createUserObject, loginUserAgent } from '../../utils/init.data.user';

let agent;

let surveyObj;

let defaultSurvey;

describe('PUT api/survey/:id', function () {
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
      .delete(`/api/survey/${id}`)
      .send()
      .expect(httpStatus.NOT_FOUND);
  });

  it('should return status NO_CONTENT and delete survey.', async () => {
    await agent
      .delete(`/api/survey/${defaultSurvey._id}`)
      .send()
      .expect(httpStatus.NO_CONTENT);

    const reloadSurvey = await Survey.findOne(defaultSurvey._id);
    expect(reloadSurvey).eq(null);
  });
});
