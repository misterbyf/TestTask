import mongoose, { Schema } from 'mongoose';

const surveySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true,
    unique: true
  },
  questions: [new Schema({
    name: {
      type: String,
      required: true
    }
  })]
});

export default mongoose.model('Survey', surveySchema);
