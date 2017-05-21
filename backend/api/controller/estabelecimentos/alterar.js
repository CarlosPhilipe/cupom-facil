// CHAMADA ao mecanismo de conexão
const Estabelecimento = require('../../model/Estabelecimento');
// método chamado no update dados do cliente
// /cliente/:id
module.exports = function alterar(req, res) {

  Estabelecimento.update({
    est_nome: req.body.est_nome,
    est_email: req.body.est_email,
    est_hashsenha: req.body.est_hashsenha,
    est_logo: req.body.est_logo,
    est_cep: req.body.est_cep,
    est_bairro: req.body.est_bairro,
    est_rua: req.body.est_rua,
    est_numero: req.body.est_numero,
    est_complemento: req.body.est_complemento,
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
