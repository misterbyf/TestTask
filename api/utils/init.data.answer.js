import faker from 'faker';
import User from '../models/User';
import Survey from '../models/Survey';
import Answer from '../models/Answer';
import { defaultUser } from './init.data.user';
import { defaultSurvey } from './init.data.survey';

async function createAnswerObject() {
  try {
    const object = {};
    const map = new Map();
    const survey = await Survey.findOne({ email: defaultSurvey.email });
    survey.questions.map((values, index) => {
      const { id } = values;
      map.set(id, faker.lorem.words());
    });
    map.forEach((value, key) => (object[key] = value));
    return object;
  } catch (error) {
    return console.warn(error);
  }
}

async function createDefaultAnswer() {
  try {
    const user = await User.findOne({ email: defaultUser.email });
    const survey = await Survey.findOne({ url: defaultSurvey.url });
    const data = await createAnswerObject();
    const answer = new Answer({
      user: user.id,
      survey: survey.id,
      data
    });
    await answer.save();
    return answer;
  } catch (error) {
    return console.warn(error.message);
  }
}

export {
  createAnswerObject,
  createDefaultAnswer
};
