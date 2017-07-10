// CHAMADA ao mecanismo de conexão
const Usuario = require('../../model/Usuario');
const Util = require('../../model/Util');
// /usuario/:id
module.exports = function alterar(req, res) {
    /*
    Constroi o objeto;
    depois salva;
    */
    var key = Util().buildKeyFromName();

    Usuario.update({
      usu_nome: req.body.usu_nome,
      usu_email: req.body.usu_email,
      usu_hashsenha: req.body.usu_hashsenha,
      usu_ativo : req.body.usu_ativo,
     },{
      where: {
        id: req.params.id
      }
    }
    ).then(result => {
      // em caso de sucesso
      res.send(`{"mensagem":"ok"}`);
    })
    .catch(error => {
      // em caso de erro
      res.send(`{"mensagem":"erro","tipo":"${error}"}`);
    })
}
