// eslint-disable-next-line strict
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
// eslint-disable-next-line no-unused-vars
const dotEnv = require('dotenv').config();
const authRouter = require('./routes/auth');
const userRouter = require('./routes/user');
const surveyRouter = require('./routes/survey');
const surveyAnswerRouter = require('./routes/survey.answer');

const app = express();
const PORT = process.env.PORT || 8080;
const URL = process.env.URL;

app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());
require('./midlleware/passport')(passport);

app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.use('/api/survey', surveyRouter);
app.use('/api/survey_answer', surveyAnswerRouter);

async function runServer() {
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    app.listen(PORT, () => {
      console.log(`Server has been started on port: ${PORT}`);
    });
  } catch (e) {
    console.log(`Server message: ${e.message}`);
    process.exit(1);
  }
}

runServer().catch(error => {
  console.log(error.message);
});
