// CHAMADA ao mecanismo de conexão
const Promocao = require('../../model/Promocao');
// método chamado no post do cliente
// /cliente
module.exports = function novo(req, res) {
    /*
    Constroi o objeto;
    depois salva;
    */
    Promocao.build({
       pro_titulo: req.body.pro_titulo,
       pro_regulamento: req.body.pro_regulamento,
       pro_img_fundo: req.body.pro_img_fundo,
       pro_img_chamada: req.body.pro_img_chamada,
       pro_validade: req.body.pro_validade,
       pro_valor: req.body.pro_valor,
       pro_qtd_cupom: req.body.pro_qtd_cupom,
       pro_ativo: req.body.pro_ativo,
       estabelecimento_id_est: req.body.estabelecimento_id_est
     })
    .save()
    .then(result => {
      // em caso de sucesso
      res.send(`{"mensagem":"ok"}`);
    })
    .catch(error => {
      // em caso de erro
      res.send(`{"mensagem":"erro","tipo":"${error}"}`);
    })
}
