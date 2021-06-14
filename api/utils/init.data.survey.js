import faker from 'faker';
import Survey from '../models/Survey';

const defaultSurvey = {
  name: faker.lorem.word(),
  url: faker.lorem.word(),
  questions: [
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

const createSurvey = {
  name: faker.lorem.word(),
  url: faker.lorem.word(),
  questions: [
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

const updateSurvey = {
  name: faker.lorem.word(),
  url: faker.lorem.word(),
  questions: [
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

async function createDefaultSurvey() {
  try {
    const survey = new Survey(defaultSurvey);
    await survey.save();
    return survey;
  } catch (error) {
    return console.warn(error);
  }
}

export {
  createSurvey,
  updateSurvey,
  defaultSurvey,
  createDefaultSurvey
};
