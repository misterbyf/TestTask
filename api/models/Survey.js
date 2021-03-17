const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const surveySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  question: [{
    name: {
      type: String,
      default: ''
    }
  }]
});

module.exports = mongoose.model('Survey', surveySchema);
