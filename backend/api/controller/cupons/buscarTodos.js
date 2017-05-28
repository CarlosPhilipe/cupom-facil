// CHAMADA ao mecanismo de conexão
const Cupom = require('../../model/Cupom');
// método chamado no get de todos os clientes
// /cliente
module.exports = function buscarTodos(req, res) {
    Cupom.findAll({

    }).then(result => {
        res.send(result);
    })
    .catch(error => {
        res.send(`{"mensagem":"erro","tipo":"${error}"}`);
    })

}
