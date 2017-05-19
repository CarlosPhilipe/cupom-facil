const Cliente = require('../../model/Cliente');
module.exports = function novo(req, res) {
  // you can also build, save and access the object with chaining:
    Cliente.build({
       cli_nome: req.body.cli_nome,
       cli_email: req.body.cli_email,
       cli_hashsenha: req.body.cli_hashsenha,
       cli_token_reset_senha:req.body.cli_token_reset_senha,
       cli_dt_nascimento: req.body.cli_dt_nascimento,
       cli_sexo: req.body.cli_sexo,
       cli_ativo: req.body.cli_ativo
     })
    .save()
    .then(anotherTask => {
      res.send('Sucesso ');
    })
    .catch(error => {
      // Ooops, do some error-handling
      res.send('Error ');
    })
}
