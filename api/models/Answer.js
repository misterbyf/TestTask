const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const answerSchema = new Schema({
  user: {
    ref: 'User',
    type: Schema.Types.ObjectId
  },
  survey: {
    ref: 'Survey',
    type: Schema.Types.ObjectId
  },
  data: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Answer', answerSchema);
