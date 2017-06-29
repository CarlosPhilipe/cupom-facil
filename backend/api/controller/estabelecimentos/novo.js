// CHAMADA ao mecanismo de conexão
const Estabelecimento = require('../../model/Estabelecimento');
const Util = require('../../model/Util');
// método chamado no post do cliente
// /cliente
module.exports = function novo(req, res) {
    /*
    Constroi o objeto;
    depois salva;
    */
    var key = Util().buildKeyFromName();

    Estabelecimento.build({
      est_key: key,
      est_nome: req.body.est_nome,
      est_email: req.body.est_email,
      est_hashsenha: req.body.est_hashsenha,
      est_logo: req.body.est_logo,
      est_cep: req.body.est_cep,
      est_bairro: req.body.est_bairro,
      est_rua: req.body.est_rua,
      est_numero: req.body.est_numero,
      est_complemento: req.body.est_complemento,
      est_ativo : req.body.est_ativo,
     })
    .save()
    .then(result => {
      // em caso de sucesso
      res.send(`{"mensagem":"ok","key":"${key}"}`);
    })
    .catch(error => {
      // em caso de erro
      res.send(`{"mensagem":"erro","tipo":"${error}"}`);
    })
}
