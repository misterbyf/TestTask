import {
  describe,
  it,
  beforeEach
} from 'mocha';
import { expect } from 'chai/index';
import httpStatus from 'http-status';
import clearCollections from '../../utils/clear.collections';
import { createDefaultUser, loginUserAgent } from '../../utils/init.data.user';
import { createDefaultSurvey, defaultSurvey } from '../../utils/init.data.survey';
import { createAnswerObject, createDefaultAnswer } from '../../utils/init.data.answer';

let answer;
let survey;
let agent;

describe('/answer', () => {
  beforeEach(async () => {
    await clearCollections();
    await createDefaultUser();
    survey = await createDefaultSurvey();
    answer = await createDefaultAnswer();
    agent = await loginUserAgent();
  });
  it('POST api/answer', async () => {
    const data = await createAnswerObject();
    await agent
      .post(`/api/answer/${defaultSurvey.url}`)
      .send({
        data
      })
      .expect(httpStatus.CREATED)
      .expect((res) => {
        expect(res.body).to.be.an('object');
        expect(res.body).has.own.property('data');
        expect(res.body.data).to.be.an('object');
        expect(JSON.stringify(res.body.data)).eq(JSON.stringify(data));
      });
  });
  it('GET api/answer/:url/:id', async () => {
    await agent
      .get(`/api/answer/${defaultSurvey.url}/${answer.id}`)
      .send()
      .expect(httpStatus.OK)
      .expect((res) => {
        expect(res.body).to.be.an('object');
        expect(res.body).has.own.property('data');
        expect(res.body.data).to.be.an('object');
        expect(JSON.stringify(res.body.data)).eq(JSON.stringify(answer.data));
      });
  });
  it('GET api/answer', async () => {
    await agent
      .get(`/api/answer/${survey.url}`)
      .send()
      .expect(httpStatus.OK)
      .expect((res) => {
        answer.survey = survey;
        expect(res.body).to.be.an('array').to.have.lengthOf(1);
        expect(JSON.stringify(res.body[0])).eq(JSON.stringify(answer));
      });
  });
});
