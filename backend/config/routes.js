const express = require('express')
// Acessível dentro da pasta controller
const cliente = require('../api/controller/clientes/')
module.exports = function(server, connection) {

	connection.sequelize.authenticate()
  .then(err => {
    console.log('Conexão foi estabelecida com sucesso.');
  })
  .catch(err => {
    console.error('Não foi possível conectar ao banco de dados:', err);
  });

	// API Routes
	const router = express.Router()
	server.use('/api', router)

	// cliente
	server.post('/cliente', cliente.novo);
	server.get('/cliente', cliente.buscarTodos);
	server.get('/cliente/:id', cliente.buscar);
	server.put('/cliente/:id', cliente.alterar);
	server.delete('/cliente/:id', cliente.excluir);

	// Rotas de cliente da API
	const person = require('../api/person/personService')
	person.register(router, '/person')
}
