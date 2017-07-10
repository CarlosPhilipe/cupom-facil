var jwt = require('jsonwebtoken');
var passport = require("passport");
var passportJWT = require("passport-jwt");
var Usuario = require("./../api/model/Usuario");

var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;

var jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeader();
jwtOptions.secretOrKey = 'everybodyneedtheCesarasteacher';

var strategy = new JwtStrategy(jwtOptions, function(jwt_payload, next) {
 console.log('payload received', jwt_payload);
 Usuario.findAll({
  where: {
     id: jwt_payload.id
   }

 }).then(result => {
   next(null, result);

 }).catch(error => {
   next(null, false);
 })
});

passport.use(strategy);

module.exports = {passport , jwt, jwtOptions};


