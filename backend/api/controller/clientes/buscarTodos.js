// CHAMADA ao mecanismo de conexão
const Cliente = require('../../model/Cliente');
// método chamado no get de todos os clientes
// /cliente
module.exports = function buscarTodos(req, res) {
    var key = req.params.key;
    Cliente.findAll({

      where: {
        est_key: key,
      }

    }).then(result => {
        res.send(result);
    })
    .catch(error => {
        res.send(`{"mensagem":"erro","tipo":"${error}"}`);
    })

}
