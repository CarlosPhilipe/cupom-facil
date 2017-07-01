const Cliente         = require('../../model/Cliente');
const Util            = require('../../model/Util');
const Estabelecimento = require('../../model/Estabelecimento');

module.exports = function zonadetestes(req, res) {

  //  console.log(Util.getDate());

  var id = Estabelecimento.getIdByKey('e24def63876c4ebddc2b4315a847d835');
  res.send(id);
}
