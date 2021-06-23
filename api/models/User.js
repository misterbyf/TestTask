import mongoose, { Schema } from 'mongoose';
import bCrypt from 'bcrypt';

const SALT_ROUNDS = process.env.SALT_ROUNDS;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

userSchema.pre('save', function (next) {
  if (this.isNew && this.password) {
    const salt = bCrypt.genSaltSync(parseInt(SALT_ROUNDS, 10));
    this.password = bCrypt.hashSync(this.password, salt);
  }
  next();
});

export default mongoose.model('User', userSchema);
