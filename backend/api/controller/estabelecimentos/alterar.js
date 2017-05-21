// CHAMADA ao mecanismo de conexão
const Estabelecimento = require('../../model/Estabelecimento');
// método chamado no update dados do cliente
// /cliente/:id
module.exports = function alterar(req, res) {

  Estabelecimento.update({
    est_nome: req.body.est_key,
    est_email: req.body.est_key,
    est_hashsenha: req.body.est_key,
    est_logo: req.body.est_key,
    est_cep: req.body.est_key,
    est_bairro: req.body.est_key,
    est_rua: req.body.est_key,
    est_numero: req.body.est_key,
    est_complemento: req.body.est_key,
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
