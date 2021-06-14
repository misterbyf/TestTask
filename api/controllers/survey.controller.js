import Survey from '../models/Survey';
import httpStatus from 'http-status';

async function createSurvey(req, res, next) {
  try {
    const {
      name,
      url,
      questions
    } = req.body;
    const result = await Survey.findOne({ url });
    if (result) {
      return res.status(httpStatus.BAD_REQUEST).json({
        message: 'Survey with same email already exist.'
      });
    }
    const survey = new Survey({
      name,
      url,
      questions
    });
    await survey.save();
    return res.status(httpStatus.CREATED).json(survey);
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
    const { id } = req.params;
    const {
      name,
      url,
      questions
    } = req.body;
    const survey = await Survey.findById(id);
    if (!survey) {
      return res.status(httpStatus.NOT_FOUND).json({ message: 'Survey with same id not found.' });
    }
    const reloadSurvey = await Survey.updateOne({ _id: id }, {
      $set: {
        name,
        url,
        questions
      }
    });
    return res.status(httpStatus.OK).json(reloadSurvey);
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
    const result = await Survey.remove({ _id: id });
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
