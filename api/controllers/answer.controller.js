import httpStatus from 'http-status-codes';

import Answer from '../models/Answer';
import Survey from '../models/Survey';

/**
 * POST /api/answer/:id
 * */
async function createAnswer(req, res, next) {
  try {
    const { id } = req.user;
    
    const { url } = req.params;
    
    const data = req.body.data;

    const survey = await Survey.findOne({ url });

    if (!survey) {
      return res
        .status(httpStatus.NOT_FOUND)
        .json({
          message: 'Survey not found.'
        });
    }

    const answer = new Answer({
      user: id,
      survey,
      data
    });

    await answer.save();

    const reloadAnswer = await Answer.findById(answer._id);

    if (!reloadAnswer) {
      return res
        .status(httpStatus.NOT_FOUND)
        .json({
          message: 'Answer was not created..'
        });
    }

    return res
      .status(httpStatus.CREATED)
      .json(reloadAnswer);
  } catch (error) {
    return next(error);
  }
}

/**
 * GET /api/answer/:url/:id
 * */
async function getAnswer(req, res, next) {
  try {
    const { url, id } = req.params;

    const survey = await Survey.findOne({ url });

    if (!survey) {
      return res
        .status(httpStatus.NOT_FOUND)
        .json({
          message: 'Survey with same email not found.'
        });
    }

    const answer = await Answer.findById(id);

    if (!answer) {
      return res
        .status(httpStatus.NOT_FOUND)
        .json({
          message: 'Answer with same id not found.'
        });
    }

    answer.survey = survey;

    return res
      .json(answer);
  } catch (error) {
    return next(error);
  }
}

/**
 * GET /api/answer/:url
 * */
async function getAnswers(req, res, next) {
  try {
    const { url } = req.params;

    const survey = await Survey.findOne({ url });

    if (!survey) {
      return res
        .status(httpStatus.NOT_FOUND)
        .json({
          message: 'Survey with same email not found.'
        });
    }

    const answers = await Answer.find({ survey: survey._id }).populate('survey');

    return res
      .json(answers);
  } catch (error) {
    return next(error);
  }
}

export {
  createAnswer,
  getAnswer,
  getAnswers
};
