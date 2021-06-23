import httpStatus from 'http-status-codes';

import Survey from '../models/Survey';

/**
 * POST /api/survey
 * */
async function createSurvey(req, res, next) {
  try {
    const {
      name,
      url,
      questions
    } = req.body;

    const result = await Survey.findOne({ url });

    if (result) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({
          message: 'Survey with same url already exist.'
        });
    }

    const survey = new Survey({
      name,
      url,
      questions
    });

    await survey.save();

    return res
      .status(httpStatus.CREATED)
      .json(survey);
  } catch (error) {
    return next(error);
  }
}

/**
 * GET /api/survey/:id
 * */
async function getSurvey(req, res, next) {
  try {
    const { id } = req.params;

    const survey = await Survey.findById(id);

    if (!survey) {
      return res
        .status(httpStatus.NOT_FOUND)
        .json({
          message: 'Survey with same id not found.'
        });
    }

    return res.json(survey);
  } catch (error) {
    return next(error);
  }
}

/**
 * PUT /api/survey/:id
 * */
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
      return res
        .status(httpStatus.NOT_FOUND)
        .json({
          message: 'Survey with same id not found.'
        });
    }

    const checkURL = await Survey.findOne({ url });

    if (checkURL) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({
          message: 'Survey with this url already exist.'
        });
    }

    Object.assign(survey, { name, url, questions });

    await Survey.updateOne({ _id: id }, {
      $set: survey
    });

    const reloadSurvey = await Survey.findOne({ url });

    return res
      .json(reloadSurvey);
  } catch (error) {
    return next(error);
  }
}

/**
 * DELETE /api/survey/:id
 * */
async function removeSurvey(req, res, next) {
  try {
    const { id } = req.params;

    const survey = await Survey.findById(id);

    if (!survey) {
      return res
        .status(httpStatus.NOT_FOUND)
        .json({
          message: 'Survey with same id not found.'
        });
    }

    await survey.remove();

    return res
      .status(httpStatus.NO_CONTENT)
      .json({
        message: 'Survey has been deleted.'
      });
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
