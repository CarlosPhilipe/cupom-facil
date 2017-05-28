// CHAMADA ao mecanismo de conexão
const Promocao = require('../../model/Promocao');
// método chamado no get de todos os clientes
// /cliente
module.exports = function buscarTodos(req, res) {
    Promocao.findAll({

    }).then(result => {
        res.send(result);
    })
    .catch(error => {
        res.send(`{"mensagem":"erro","tipo":"${error}"}`);
    })

}
