const express = require('express')
const cliente = require('../api/clientes/')

module.exports = function(server, sequelize) {

	sequelize.authenticate()
  .then(err => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
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
