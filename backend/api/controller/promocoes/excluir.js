// CHAMADA ao mecanismo de conexão
const Promocao = require('../../model/Promocao');
// método usado no delete de todos os clientes
// /promocao/:id
module.exports = function excluir(req, res) {
  Promocao.update({
    pro_ativo: false,
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
