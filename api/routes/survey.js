const express = require('express');
const router = express.Router();
const surveyController = require('../controllers/survey.controller');

router.post('/', surveyController.createSurvey);
router.get('/:id', surveyController.getSurvey);
router.put('/:id', surveyController.updateSurvey);
router.delete('/:id', surveyController.removeSurvey);

module.exports = router;
