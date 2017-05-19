var cliente = [];
cliente.buscarTodos   = require("./buscarTodos.js");
cliente.buscar        = require("./buscar.js");
cliente.novo          = require("./novo.js");
cliente.alterar       = require("./alterar.js");
cliente.excluir       = require("./excluir.js");
// retorna as funções
module.exports = cliente;
