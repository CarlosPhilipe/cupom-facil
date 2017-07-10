// CHAMADA ao mecanismo de conexão
const Promocao = require('../../model/Promocao');
// método chamado no update dados do cliente
// /promocao/:id
module.exports = function alterar(req, res) {

  Promocao.update({
    pro_titulo: req.body.pro_titulo,
    pro_regulamento: req.body.pro_regulamento,
    pro_img_fundo: req.body.pro_img_fundo,
    pro_img_chamada: req.body.pro_img_chamada,
    pro_validade: req.body.pro_validade,
    pro_valor: req.body.pro_valor,
    pro_qtd_cupom: req.body.pro_qtd_cupom,
    estabelecimento_id_est: req.body.estabelecimento_id_est
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
