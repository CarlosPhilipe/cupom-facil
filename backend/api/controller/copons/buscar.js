// CHAMADA ao mecanismo de conexão
const Cupom = require('../../model/Cupom');
// método chamado do get com patrametro
// /cliente/:id
module.exports = function buscar(req, res) {
        Cupom.findAll({
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
