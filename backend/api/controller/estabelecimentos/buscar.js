// CHAMADA ao mecanismo de conexão
const Estabelecimento = require('../../model/Estabelecimento');
// método chamado do get com patrametro
// /cliente/:id
module.exports = function buscar(req, res) {
        Estabelecimento.findAll({
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
