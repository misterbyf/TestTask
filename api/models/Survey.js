import mongoose, { Schema } from 'mongoose';

const reqString = {
  type: String,
  required: true
};

const questionSchema = new Schema({
  name: {
    type: String
  }
});

const surveySchema = new Schema({
  name: reqString,
  url: reqString,
  questions: [questionSchema]
});

export default mongoose.model('Survey', surveySchema);
