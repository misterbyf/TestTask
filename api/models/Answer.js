import mongoose, { Schema } from 'mongoose';

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

export default mongoose.model('Answer', answerSchema);
