import mongoose, { Schema } from 'mongoose';

const reqString = {
  type: String,
  required: true
};

const userSchema = new Schema({
  name: reqString,
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: reqString
});

export default mongoose.model('User', userSchema);
