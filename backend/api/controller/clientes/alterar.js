// CHAMADA ao mecanismo de conexão
const Cliente = require('../../model/Cliente');
// método chamado no update dados do cliente
// /cliente/:id
module.exports = function alterar(req, res) {

  Cliente.update({
    usu_id: req.body.usu_id,
    cli_dt_nascimento: req.body.cli_dt_nascimento,
    cli_sexo: req.body.cli_sexo,
  },{
    where: {
      id: req.params.id
    }
  }
).then(result => {
  // em caso de sucesso
  res.send(`{"mensagem":"ok"}`);
})
.catch(error => {
  // em caso de erro
  res.send(`{"mensagem":"erro","tipo":"${error}"}`);
})

}
