// CHAMADA ao mecanismo de conexão
const Cupom = require('../../model/Cupom');
// método chamado no update dados do cliente
// /cupom/:id
module.exports = function alterar(req, res) {

  Cupom.update({
    cup_usado: req.body.cup_usado,
    cup_dt_ult_alteracao: req.body.cup_dt_ult_alteracao,
    cup_ativo: req.body.cup_ativo,
    cliente_id_cli: req.body.cliente_id_cli,
    promocao_id_pro: req.body.promocao_id_pro
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
