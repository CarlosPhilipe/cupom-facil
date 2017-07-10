const Usuario = require('../../model/Usuario');
const auth = require('./../../../config/passport')

// /login
module.exports = function login(req, res) {
  Usuario.findAll({
    where: {
    usu_email: req.body.usu_email,
    usu_hashsenha: req.body.usu_hashsenha
    }
  }).then(result =>
    {
      if(result.length!=0){
        var payload = {id: result.id};
        var token = auth.jwt.sign(payload, auth.jwtOptions.secretOrKey);
        res.json({message: "ok", token: token});
      }else{
        res.status(401).json({message:"Nenhum usuario encontrado"});
      }
  }).catch(error =>
    {
    res.status(401).json({message:"Nenhum usuario encontrado"});
  })

};
