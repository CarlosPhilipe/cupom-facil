// CHAMADA ao mecanismo de conexão
const Cupom = require('../../model/Cupom');
// método usado no delete de todos os clientes
// /cupom/:id
module.exports = function excluir(req, res) {
  Cupom.update({
    cup_ativo: false,
  },{
    where: {
      id: req.params.id
    }
  }
).then(result => {
  res.send(`{"mensagem":"ok"}`);
})
.catch(error => {
  // em caso de erro
  res.send(`{"mensagem":"erro","tipo":"${error}"}`);
})
}
