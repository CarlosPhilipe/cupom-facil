// CHAMADA ao mecanismo de conexão
const Cupom           = require('../../model/Cupom');
const Util            = require('../../model/Util');
const Estabelecimento = require('../../model/Estabelecimento');
// método chamado no update dados do cliente
// /cupom/:id
module.exports = function usar(req, res) {

  var data = Util().getDate();
  Cupom.update({
    cup_usado: 1,
    cup_dt_ult_alteracao: data,
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
