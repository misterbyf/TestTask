import faker from 'faker';

import Survey from '../models/Survey';

function createSurveyObject(data = {}) {
  const survey = {
    name: data.name || faker.lorem.word(),
    url: data.url || faker.lorem.word(),
    questions: data.questions || [
      {
        name: faker.lorem.word()
      },
      {
        name: faker.lorem.word()
      },
      {
        name: faker.lorem.word()
      },
      {
        name: faker.lorem.word()
      }
    ]
  };
  return survey;
}

async function createDefaultSurvey(data = {}) {
  try {
    const surveyObj = data;

    const survey = new Survey(surveyObj);

    await survey.save();

    return survey;
  } catch (error) {
    return console.warn(error);
  }
}

export {
  createSurveyObject,
  createDefaultSurvey
};
