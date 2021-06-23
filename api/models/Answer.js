import mongoose, { Schema } from 'mongoose';

const answerSchema = new Schema({
  user: {
    ref: 'User',
    type: Schema.Types.ObjectId,
    required: true
  },
  survey: {
    ref: 'Survey',
    type: Schema.Types.ObjectId,
    required: true
  },
  data: {
    type: Schema.Types.Mixed,
    required: true
  }
});

export default mongoose.model('Answer', answerSchema);
