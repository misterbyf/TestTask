import faker from 'faker';
import mongoose from 'mongoose';

import Answer from '../models/Answer';

function createAnswerObject(data = {}) {
  try {
    const object = {};

    const map = new Map();

    data.survey.questions.map((values) => {
      const { id } = values;

      map.set(id, faker.lorem.words());
    });

    map.forEach((value, key) => (object[key] = value));

    return object;
  } catch (error) {
    return console.warn(error);
  }
}

async function createDefaultAnswer(data = {}) {
  try {
    const user = data.user._id || mongoose.Types.ObjectId();

    const survey = data.survey._id || mongoose.Types.ObjectId();

    const answerObject = await createAnswerObject({ survey: data.survey });

    const answer = new Answer({
      user: user,
      survey: survey,
      data: answerObject
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
