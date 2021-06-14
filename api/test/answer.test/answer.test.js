import {
  describe,
  it,
  beforeEach
} from 'mocha';
import { expect } from 'chai/index';
import request from 'supertest';
import httpStatus from 'http-status';
import app from '../../src/index';
import clearCollections from '../../utils/clear.collections';
import { createDefaultUser, loginUser } from '../../utils/init.data.user';
import { createDefaultSurvey, defaultSurvey } from '../../utils/init.data.survey';
import { createAnswerObject, createDefaultAnswer } from '../../utils/init.data.answer';

let cookie;
let answer;
let survey;

describe('/answer', () => {
  beforeEach(async () => {
    await clearCollections();
    await createDefaultUser();
    survey = await createDefaultSurvey();
    answer = await createDefaultAnswer();
    cookie = await loginUser();
  });
  it('POST api/answer', async () => {
    const data = await createAnswerObject();
    const res = await request(app)
      .post(`/api/answer/${defaultSurvey.url}`)
      .send(data)
      .set('Cookie', cookie)
      .expect(httpStatus.CREATED);
    expect(res.body).to.be.an('object');
    expect(res.body).has.own.property('data');
    expect(res.body.data).to.be.an('object');
  });
  it('GET api/answer/:url/:id', async () => {
    const res = await request(app)
      .get(`/api/answer/${defaultSurvey.url}/${answer.id}`)
      .set('Cookie', cookie)
      .expect(httpStatus.OK);
    expect(res.body).to.be.an('object');
    expect(res.body).has.own.property('data');
    expect(res.body.data).to.be.an('object');
  });
  it('GET api/answer', async () => {
    const res = await request(app)
      .get(`/api/answer/${survey.url}`)
      .set('Cookie', cookie)
      .expect(httpStatus.OK);
    expect(res.body).to.be.an('array').to.have.lengthOf(1);
  });
});
