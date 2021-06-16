import httpStatus from 'http-status';

import Survey from '../models/Survey';


// TODO comments
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

    // TODO check url on uniq
    // TODO test remove questions add new questions

    Object.assign(survey, { name, url, questions })

    await survey.save();

    const reloadedSurvey = await Survey.findById(id);

    return res.status(httpStatus.OK).json(reloadedSurvey);
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

    await survey.remove();

    // const result = await Survey.remove({ _id: id });

    // TODO return status NO_CONTENT
    // TODO in tests after request reload survey from database and check existence

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
