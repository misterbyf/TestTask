import httpStatus from 'http-status';
import Answer from '../models/Answer';
import Survey from '../models/Survey';

async function createAnswer(req, res, next) {
  try {
    const { id } = req.user;
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
      user: id,
      survey: survey.id,
      data
    });
    const result = await answer.save();
    return res.status(httpStatus.CREATED).json(result);
  } catch (error) {
    return next(error);
  }
}

async function getAnswer(req, res, next) {
  try {
    const { url, id } = req.params;
    const survey = await Survey.findOne({ url });
    if (!survey) {
      return res.status(httpStatus.NOT_FOUND).json({
        message: 'Survey with same email not found.'
      });
    }
    const answer = await Answer.findById(id);
    if (!answer) {
      return res.status(httpStatus.NOT_FOUND).json({
        message: 'Answer with same id not found.'
      });
    }
    return res.status(200).json(answer);
  } catch (error) {
    return next(error);
  }
}

async function getAnswers(req, res, next) {
  try {
    const { url } = req.params;
    const survey = await Survey.findOne({ url });
    const answer = await Answer.find({ survey: survey._id });
    if (!survey) {
      return res.status(httpStatus.NOT_FOUND).json({
        message: 'Survey with same email not found.'
      });
    }
    return res.status(httpStatus.OK).json(answer);
  } catch (error) {
    return next(error);
  }
}

export {
  createAnswer,
  getAnswer,
  getAnswers
};
