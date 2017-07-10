// CHAMADA ao mecanismo de conexão
const Usuario = require('../../model/Usuario');
// método usado no delete de todos os clientes
// /usuario/:id
module.exports = function excluir(req, res) {
  Usuario.update({
    usu_ativo : false,
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
