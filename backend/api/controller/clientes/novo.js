// CHAMADA ao mecanismo de conexão
const Cliente = require('../../model/Cliente');
// método chamado no post do cliente
// /cliente
module.exports = function novo(req, res) {
    /*
    Constroi o objeto;
    depois salva;
    */
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
    .then(result => {
      // em caso de sucesso
      res.send(`{"mensagem":"ok"}`);
    })
    .catch(error => {
      // em caso de erro
      res.send(`{"mensagem":"erro","tipo":"${error}"}`);
    })
}
