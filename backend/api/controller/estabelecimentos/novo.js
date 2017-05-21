// CHAMADA ao mecanismo de conexão
const Estabelecimento = require('../../model/Estabelecimento');
// método chamado no post do cliente
// /cliente
module.exports = function novo(req, res) {
    /*
    Constroi o objeto;
    depois salva;
    */
    Estabelecimento.build({
      est_key: req.body.est_key,
      est_nome: req.body.est_nome,
      est_email: req.body.est_email,
      est_hashsenha: req.body.est_hashsenha,
      est_logo: req.body.est_logo,
      est_cep: req.body.est_cep,
      est_bairro: req.body.est_bairro,
      est_rua: req.body.est_rua,
      est_numero: req.body.est_numero,
      est_complemento: req.body.est_complemento,
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
