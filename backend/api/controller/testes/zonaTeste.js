const Cliente = require('../../model/Cliente');
const Util = require('../../model/Util');

module.exports = function zonadetestes(req, res) {

  //  console.log(Util.getDate());

    res.send(Util().buildKeyFromName());
}
