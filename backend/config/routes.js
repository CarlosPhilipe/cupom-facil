const express 				= require('express');

// Acessível dentro da pasta controller
const cliente 		  = require('../api/controller/clientes/');
const estabelecimento = require('../api/controller/estabelecimentos/');
const usuario  		  = require('../api/controller/usuarios/');
const promocao 		  = require('../api/controller/promocoes/');
const cupom 		  = require('../api/controller/cupons/');

const teste 		  = require('../api/controller/testes/');


module.exports = function(server, connection, auth) {

	connection.sequelize.authenticate()
    .then(err => {
    	console.log('Conexão foi estabelecida com sucesso.');
  	})
    .catch(err => {
    	console.error('Não foi possível conectar ao banco de dados:', err);
    });

	// API Routes
	const router = express.Router()
	server.use(auth.passport.initialize());


	//Utilizado para validação
	server.use('/api', auth.passport.authenticate('jwt', { session: false }), router);

	server.get('/:key/teste/zonadetestes/:codigo', teste.zonadetestes);

	// usuarios
	server.post('/usuario', usuario.novo);
	server.get('/api/usuario', usuario.buscarTodos);
	server.get('/api/usuario/:id', usuario.buscar);
	server.put('/api/usuario/:id', usuario.alterar);
	server.delete('/api/usuario/:id', usuario.excluir);
  	server.post('/login', usuario.login);

	// cliente
	server.post('/api/:key/cliente', cliente.novo);
	server.get('/api/:key/cliente', cliente.buscarTodos);
	server.get('/api/:key/cliente/:id', cliente.buscar);
	server.put('/api/:key/cliente/:id', cliente.alterar);
	server.delete('/api/:key/cliente/:id', cliente.excluir);

	// estabelecimento
	server.post('/api/estabelecimento', estabelecimento.novo);
	server.get('/api/estabelecimento', estabelecimento.buscarTodos);
	server.get('/api/estabelecimento/:id', estabelecimento.buscar);
	server.put('/api/estabelecimento/:id', estabelecimento.alterar);
	server.delete('/api/estabelecimento/:id', estabelecimento.excluir);

	// promocoes
	server.post('/api/promocao', promocao.novo);
	server.get('/api/promocao', promocao.buscarTodos);
	server.get('/api/promocao/:id', promocao.buscar);
	server.put('/api/promocao/:id', promocao.alterar);
	server.delete('/api/promocao/:id', promocao.excluir);

	// promocoes
	server.post('/api/cupom', cupom.novo);
	server.get('/api/cupom', cupom.buscarTodos);
	server.get('/api/cupom/:id', cupom.buscar);
	server.get('/api/cupom/:id/cliente', cupom.buscarPorCliente);
	server.get('/api/cupom/:id/promocao', cupom.buscarPorPromocao);
	server.put('/api/cupom/:id', cupom.alterar);
	server.delete('/api/cupom/:id', cupom.excluir);
	server.post('/api/cupom/:id/usar', cupom.usar);

	server.use(function(req, res, next){
		res.status(404);
		res.send(`{"mensagem":"erro","tipo":"servico inexistente"}`);
	});

	// Rotas de cliente da API
	const person = require('../api/person/personService')
	person.register(router, '/person')

}
