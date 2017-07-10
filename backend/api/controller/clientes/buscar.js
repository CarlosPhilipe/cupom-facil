// CHAMADA ao mecanismo de conexão
const Cliente = require('../../model/Cliente');
// método chamado do get com patrametro
// /cliente/:id
module.exports = function buscar(req, res) {
    var key = req.params.key;
    
    Cliente.findAll({
      where: {
        id: req.params.id,
        est_key: key,
      }
    }).then(result => {
        res.send(result);

    })
    .catch(error => {
        res.send(`{"mensagem":"erro","tipo":"${error}"}`);
    })
}
