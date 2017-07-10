// CHAMADA ao mecanismo de conexão
const Promocao = require('../../model/Promocao');
// método chamado do get com patrametro
// /promocao/:id
module.exports = function buscar(req, res) {
        Promocao.findAll({
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
