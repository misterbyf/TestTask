import {
  describe,
  it,
  beforeEach
} from 'mocha';
import { expect } from 'chai/index';
import httpStatus from 'http-status';
import clearCollections from '../../utils/clear.collections';
import { createDefaultUser, loginUserAgent } from '../../utils/init.data.user';
import {
  createSurvey,
  updateSurvey,
  createDefaultSurvey,
  defaultSurvey
} from '../../utils/init.data.survey';

let survey;
let agent;

describe('survey', () => {
  beforeEach(async () => {
    await clearCollections();
    await createDefaultUser();
    survey = await createDefaultSurvey();
    agent = await loginUserAgent();
  });
  it('POST /api/survey', async () => {
    await agent
      .post('/api/survey')
      .send()
      .expect(httpStatus.CREATED)
      .expect((res) => {
        expect(res.body).to.be.an('object');
        expect(res.body).has.own.property('name').eq(createSurvey.name);
        expect(res.body).has.own.property('url').eq(createSurvey.url);
        expect(res.body).has.own.property('questions');
        expect(res.body.questions).to.be.an('array').to.have.lengthOf(4);
        expect(res.body.questions[0]).to.have.own.property('name').eq(createSurvey.questions[0].name);
      });
  });
  it('PUT /api/survey/:id', async () => {
    await agent
      .put(`/api/survey/${survey.id}`)
      .send(updateSurvey)
      .expect(httpStatus.OK)
      .expect((res) => {
        expect(res.body).to.be.an('object');
        expect(res.body).has.own.property('n').eq(1);
        expect(res.body).has.own.property('ok').eq(1);
      });
  });
  it('GET /api/survey/:id', async () => {
    await agent
      .get(`/api/survey/${survey.id}`)
      .expect(httpStatus.OK)
      .expect((res) => {
        expect(res.body).to.be.an('object');
        expect(res.body).has.own.property('name').eq(defaultSurvey.name);
        expect(res.body).has.own.property('url').eq(defaultSurvey.url);
        expect(res.body).has.own.property('questions');
        expect(res.body.questions).to.be.an('array').to.have.lengthOf(4);
        expect(res.body.questions[0]).to.have.own.property('name').eq(defaultSurvey.questions[0].name);
      });
  });
  it('DELETE /api/survey/:id', async () => {
    await agent
      .delete(`/api/survey/${survey.id}`)
      .expect(httpStatus.OK)
      .expect((res) => {
        expect(res.body).to.be.an('object');
        expect(res.body).has.own.property('n').eq(1);
        expect(res.body).has.own.property('ok').eq(1);
        expect(res.body).has.own.property('deletedCount').eq(1);
      });
  });
});
