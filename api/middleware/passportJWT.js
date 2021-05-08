import { Strategy as JWTStrategy } from 'passport-jwt';
import dotEnv from 'dotenv';
import User from '../models/User';
import redisClient from '../utils/init.redis';
dotEnv.config();
const SECRET_KEY = process.env.JWT;

const cookieExtractor = (req) => {
  let token = null;
  if (req && req.signedCookies && req.signedCookies.jwt) {
    token = req.signedCookies.jwt;
  }
  return token;
};

const options = {
  jwtFromRequest: cookieExtractor,
  secretOrKey: SECRET_KEY
};

export default function middlewareJwt(passport) {
  passport.use(
    new JWTStrategy(options, async (payload, done) => {
      try {
        const user = await User.findOne({ email: payload.email });
        const redisToken = await redisClient.get(payload.userId.toString());
        if (user && redisToken) {
          done(null, user);
        } else {
          done(null, false);
        }
      } catch (error) {
        console.error(error);
      }
    })
  );
}
