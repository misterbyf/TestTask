import Survey from '../models/Survey';
import httpStatus from 'http-status';

async function createSurvey(req, res, next) {
  try {
    const {
      name,
      url,
      questions
    } = req.body;
    const survey = new Survey({
      name,
      url
    });
    survey.questions = questions;
    await survey.save();
    return res.status(httpStatus.CREATED).json({ survey });
  } catch (error) {
    return next(error);
  }
}

async function getSurvey(req, res, next) {
  try {
    const { id } = req.params;
    const survey = await Survey.findById(id);
    if (!survey) {
      return res.status(httpStatus.NOT_FOUND).json({ message: 'Survey with same id not found.' });
    }
    return res.status(httpStatus.OK).json(survey);
  } catch (error) {
    return next(error);
  }
}

async function updateSurvey(req, res, next) {
  try {
    const {
      id,
      name,
      url,
      questions
    } = req.body;
    const result = await Survey.findByIdAndUpdate(id, {
      name,
      url,
      questions
    }, {
      new: true
    });
    if (!result) {
      return res.status(httpStatus.NOT_FOUND).json({ message: 'Survey with same id not found.' });
    }
    return res.status(httpStatus.OK).json(result);
  } catch (error) {
    return next(error);
  }
}

async function removeSurvey(req, res, next) {
  try {
    const { id } = req.params;
    const survey = await Survey.findById(id);
    if (!survey) {
      return res.status(httpStatus.NOT_FOUND).json({ message: 'Survey with same id not found.' });
    }
    const result = await Survey.deleteOne({ id });
    return res.status(httpStatus.OK).json(result);
  } catch (error) {
    return next(error);
  }
}

export {
  createSurvey,
  getSurvey,
  updateSurvey,
  removeSurvey
};
