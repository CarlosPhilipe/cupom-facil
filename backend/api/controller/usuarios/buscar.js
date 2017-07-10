// CHAMADA ao mecanismo de conexão
const Usuario = require('../../model/Usuario');
// /usuario 
module.exports = function alterar(req, res) {
    Usuario.findOne({
      where: {
        id: req.params.id
      }
    }).then(result => {
        res.send(result);
    })
    .catch(error => {
        res.send(`{"mensagem":"erro","tipo":"${error}"}`);
    })
}
