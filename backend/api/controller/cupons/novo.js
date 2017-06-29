// CHAMADA ao mecanismo de conexão
const Cupom = require('../../model/Cupom');
// método chamado no post do cliente
// /cliente
module.exports = function novo(req, res) {
    /*
    Constroi o objeto;
    depois salva;
    */
    Cupom.build({
       cup_usado: req.body.cup_usado,
       cup_dt_criacao: req.body.cup_dt_criacao,
       cup_dt_ult_alteracao: req.body.cup_dt_ult_alteracao,
       cup_ativo: req.body.cup_ativo,
       cliente_id_cli: req.body.cliente_id_cli,
       promocao_id_pro: req.body.promocao_id_pro
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
