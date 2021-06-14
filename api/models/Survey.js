import mongoose, { Schema } from 'mongoose';

const reqString = {
  type: String,
  required: true
};

const reqUrl = {
  type: String,
  required: true,
  unique: true
};

const questionSchema = new Schema({
  name: {
    type: String
  }
});

const surveySchema = new Schema({
  name: reqString,
  url: reqUrl,
  questions: [questionSchema]
});

export default mongoose.model('Survey', surveySchema);
