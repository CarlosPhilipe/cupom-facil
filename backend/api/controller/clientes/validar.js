const Cliente = require('../../model/Cliente');
const auth = require('./../../../config/passport')

// autenticacoes
module.exports = function login(req, res) {
  Cliente.findAll({
    where: {
    cli_email: req.body.cli_email,
    cli_hashsenha: req.body.cli_hashsenha
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