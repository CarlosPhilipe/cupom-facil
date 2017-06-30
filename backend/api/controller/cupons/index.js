// agrupa todas todos os recursos num único canto para a chamada
var cupom = [];
cupom.novo          = require("./novo.js");       // POST
cupom.buscarTodos   = require("./buscarTodos.js");// GET
cupom.buscar        = require("./buscar.js");     // GET CIM ID
cupom.alterar       = require("./alterar.js");    // PUT
cupom.excluir       = require("./excluir.js");    // DELETE
cupom.usar          = require("./usar.js");    // DELETE
// retorna as funções
module.exports = cupom; // retorna um objeto com os recursos
