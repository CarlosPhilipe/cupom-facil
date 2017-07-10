// CHAMADA ao mecanismo de conexão
const Cliente = require('../../model/Cliente');
// método chamado no post do cliente
// /cliente
module.exports = function novo(req, res) {
  var key = req.params.key;

  console.log(key);
  /*
  Constroi o objeto;
  depois salva;
  */
  Cliente.build({
     usu_id: req.body.usu_id,
     cli_dt_nascimento: req.body.cli_dt_nascimento,
     cli_sexo: req.body.cli_sexo,
     est_key: req.params.key,
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
