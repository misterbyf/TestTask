const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const User = require('../models/User');
const key = process.env.JWT;

const options = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: key
};

module.exports = passport => {
  passport.use(
    new JWTStrategy(options, async (payload, done) => {
      try {
        const user = User.findById(payload.userId).select('id email');
        if (user) {
          done(null, user);
        } else {
          done(null, false);
        }
      } catch (error) {
        console.log(error);
      }
    })
  );
};
