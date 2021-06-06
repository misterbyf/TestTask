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
import { createDeafultUser, loginUser } from '../../utils/init.data.user';
import {
  createSurvey,
  updateSurvey,
  createDeafultSurvey
} from '../../utils/init.data.survey';

let cookie;
let survey;

describe('survey', () => {
  beforeEach(async () => {
    await clearCollections();
    await createDeafultUser();
    survey = await createDeafultSurvey();
    cookie = await loginUser();
  });
  it('POST /api/survey', async () => {
    const res = await request(app)
      .post('/api/survey')
      .send(createSurvey)
      .set('Cookie', cookie)
      .expect(httpStatus.CREATED);
    expect(res.body).to.be.an('object');
    expect(res.body).has.own.property('name');
    expect(res.body).has.own.property('url');
    expect(res.body).has.own.property('questions');
    expect(res.body.questions).to.be.an('array').to.have.lengthOf(4);
    expect(res.body.questions[0]).to.have.own.property('name');
  });
  it('PUT /api/survey/:id', async () => {
    const res = await request(app)
      .put(`/api/survey/${survey.id}`)
      .send(updateSurvey)
      .set('Cookie', cookie)
      .expect(httpStatus.OK);
    expect(res.body).to.be.an('object');
    expect(res.body).has.own.property('n').eq(1);
    expect(res.body).has.own.property('ok').eq(1);
  });
  it('GET /api/survey/:id', async () => {
    const res = await request(app)
      .get(`/api/survey/${survey.id}`)
      .set('Cookie', cookie)
      .expect(httpStatus.OK);
    expect(res.body).to.be.an('object');
    expect(res.body).has.own.property('name');
    expect(res.body).has.own.property('url');
    expect(res.body).has.own.property('questions');
    expect(res.body.questions).to.be.an('array').to.have.lengthOf(4);
    expect(res.body.questions[0]).to.have.own.property('name');
  });
  it('DELETE /api/survey/:id', async () => {
    const res = await request(app)
      .delete(`/api/survey/${survey.id}`)
      .set('Cookie', cookie)
      .expect(httpStatus.OK);
    expect(res.body).to.be.an('object');
    expect(res.body).has.own.property('n').eq(1);
    expect(res.body).has.own.property('ok').eq(1);
    expect(res.body).has.own.property('deletedCount').eq(1);
  });
});
