// CHAMADA ao mecanismo de conexão
const Usuario = require('../../model/Usuario');
// método chamado no get de todos os clientes
// /usuario
module.exports = function buscarTodos(req, res) {
    Usuario.findAll({

    }).then(result => {
        res.send(result);
    })
    .catch(error => {
        res.send(`{"mensagem":"erro","tipo":"${error}"}`);
    })

}