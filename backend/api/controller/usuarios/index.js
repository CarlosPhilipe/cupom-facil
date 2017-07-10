// agrupa todas todos os recursos num único canto para a chamada
var usuario = [];
usuario.novo          = require("./novo.js");       // POST
usuario.buscarTodos        = require("./buscarTodos.js");     // GET
usuario.buscar        = require("./buscar.js");     // GET CIM ID
usuario.alterar       = require("./alterar.js");    // PUT
usuario.excluir       = require("./excluir.js");    // DELETE
usuario.login       = require("./login.js");        // POST
// retorna as funções
module.exports = usuario; // retorna um objeto com os recursos
