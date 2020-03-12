const passport = require('passport');
const {ExtractJwt, Strategy} = require('passport-jwt');
// const userRepository = require('src/infra/repositories/UserRepository');
// const userModel = require('src/infra/models/UserModel');

exports.initialize = () => {
  return passport.initialize();
};

exports.authenticate = () => {
  return passport.authenticate();
}

exports.configure = (config, findById) => {
  const jwtOptions = {};
  jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  jwtOptions.secretOrKey = config.authSecret; 

  passport.use(new Strategy(jwtOptions, (jwt_payload, done) => {
        
    console.log('payload is', jwt_payload);

    findById(jwt_payload.id).then((user)=> {
      done(null, user);
    }).catch((err) => {
      done(null, err);
    });
        
  }));

  passport.serializeUser(function (user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function (user, done) {
    done(null, user);
  });
};
