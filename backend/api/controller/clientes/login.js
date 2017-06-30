const Cliente = require('../../model/Cliente');
/// importa o jwt
var jwt = require('jsonwebtoken');
var passport = require("passport");
var passportJWT = require("passport-jwt");


var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;

var jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeader();
jwtOptions.secretOrKey = 'everybodyneedtheCesarasteacher';
//
// var strategy = new JwtStrategy(jwtOptions, function(jwt_payload, next) {
//   console.log('payload received', jwt_payload);
//   Cliente.findAll({
//     where: {
//       id: jwt_payload.id
//     }
//
//   }).then(result => {
//     next(null, result);
//
//   }).catch(error => {
//     next(null, false);
//   })
// });

//passport.use(strategy);

// autenticacoes
module.exports = function login(req, res) {
  Cliente.findAll({
    where: {
    cli_email: req.body.cli_email,
    cli_hashsenha: req.body.cli_hashsenha
    }
  }).then(result =>
    {
    var payload = {id: result.id};
    var token = jwt.sign(payload, jwtOptions.secretOrKey);
    res.json({message: "ok", token: token});
  }).catch(error =>
    {
    res.status(401).json({message:"Nenhum usuario encontrado"});
  })

};
