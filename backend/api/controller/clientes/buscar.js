// CHAMADA ao mecanismo de conexão
const Cliente = require('../../model/Cliente');
// método chamado do get com patrametro
// /cliente/:id
module.exports = function buscar(req, res) {
        Cliente.findAll({
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
