// CHAMADA ao mecanismo de conexão
const Cliente = require('../../model/Cliente');
// método usado no delete de todos os clientes
// /cliente/:id
module.exports = function excluir(req, res) {
  Cliente.update({
    cli_ativo: false,
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
