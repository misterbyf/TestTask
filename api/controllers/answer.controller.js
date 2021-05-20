import httpStatus from 'http-status';
import Answer from '../models/Answer';
import Survey from '../models/Survey';

async function createAnswer(req, res, next) {
  try {
    const { _id } = req.user;
    const { url } = req.params;
    const data = req.body;
    const survey = await Survey.findOne({ url });
    if (!survey) {
      return res.status(httpStatus.NOT_FOUND).json({
        message: 'Survey not found.'
      });
    }
    if (!data) {
      return res.status(httpStatus.BAD_REQUEST).json({
        message: 'Data is empty.'
      });
    }
    const answer = new Answer({
      user: _id,
      survey: survey._id,
      data
    });
    const result = await answer.save();
    return res.status(httpStatus.CREATED).json(result);
  } catch (error) {
    return next(error);
  }
}

function getAnswer(req, res) {
  res.status(200).json({
    surveyAnswer: 'showSurveyAnswer'
  });
}

function getAnswers(req, res) {
  res.status(200).json({
    surveyAnswer: 'listSurveyAnswer'
  });
}

async function removeAnswer(req, res, next) {
  const { id } = req.params.id;
  const result = await Answer.remove(id);
  res.status(200).json(result);
}

export {
  createAnswer,
  getAnswer,
  getAnswers,
  removeAnswer
};
