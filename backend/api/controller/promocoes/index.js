// agrupa todas todos os recursos num único canto para a chamada
var promocoes = [];
promocoes.novo          = require("./novo.js");       // POST
promocoes.buscarTodos   = require("./buscarTodos.js");// GET
promocoes.buscar        = require("./buscar.js");     // GET CIM ID
promocoes.alterar       = require("./alterar.js");    // PUT
promocoes.excluir       = require("./excluir.js");    // DELETE
// retorna as funções
module.exports = promocoes; // retorna um objeto com os recursos
