import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import morgan from 'morgan';
import middlewareJwt from '../middleware/passportJWT';
import middlewareGoogle from '../middleware/passport.google';
import authRouter from '../routes/auth';
import userRouter from '../routes/user';
import surveyRouter from '../routes/survey';
import surveyAnswerRouter from '../routes/answer';
import errorHandler from '../middleware/error.handler';

const PORT = process.env.PORT || 8080;
const URL = process.env.URL;
const SECRET_COOKIE = process.env.SECRET_COOKIE;

const app = express();

app.use(cookieParser(SECRET_COOKIE));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(passport.initialize());
app.use(passport.session());

middlewareJwt(passport);
middlewareGoogle(passport);

app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.use('/api/survey', surveyRouter);
app.use('/api/answer', surveyAnswerRouter);
app.use(errorHandler);

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
    mongoose.connection.close();
    process.exit(1);
  }
}

runServer();

export default app;
