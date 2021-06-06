import request from 'supertest';
import app from '../src';
import httpStatus from 'http-status';
import Survey from '../models/Survey';

const defaultSurvey = {
  name: 'Something9',
  url: 'something-defautl.url',
  questions: [
    {
      name: 'NameOfQuestion4'
    },
    {
      name: 'NameOfQuestion3'
    },
    {
      name: 'NameOfQuestion2'
    },
    {
      name: 'NameOfQuestion1'
    }
  ]
};

const createSurvey = {
  name: 'Something9',
  url: 'something-create.url',
  questions: [
    {
      name: 'NameOfQuestion1'
    },
    {
      name: 'NameOfQuestion2'
    },
    {
      name: 'NameOfQuestion3'
    },
    {
      name: 'NameOfQuestion4'
    }
  ]
};

const updateSurvey = {
  name: 'Something10',
  url: 'something-update.url',
  questions: [
    {
      name: 'NameOfQuestion2'
    },
    {
      name: 'NameOfQuestion4'
    },
    {
      name: 'NameOfQuestion5'
    },
    {
      name: 'NameOfQuestion6'
    }
  ]
};

async function createDeafultSurvey() {
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
  createDeafultSurvey
};
