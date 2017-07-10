// CHAMADA ao mecanismo de conexão
const Usuario = require('../../model/Usuario');
const Util = require('../../model/Util');
// /usuario
module.exports = function novo(req, res) {
    /*
    Constroi o objeto;
    depois salva;
    */
    var key = Util().buildKeyFromName();

    Usuario.build({
      usu_nome: req.body.usu_nome,
      usu_email: req.body.usu_email,
      usu_hashsenha: req.body.usu_hashsenha,
      usu_ativo : req.body.usu_ativo,
     })
    .save()
    .then(result => {
      // em caso de sucesso
      res.send(`{"mensagem":"ok","key":"${key}"}`);
    })
    .catch(error => {
      // em caso de erro
      res.send(`{"mensagem":"erro","tipo":"${error}"}`);
    })
}
