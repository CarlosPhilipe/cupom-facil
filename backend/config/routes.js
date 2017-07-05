const express 				= require('express');
// Acessível dentro da pasta controller
const cliente 				= require('../api/controller/clientes/');
const estabelecimento = require('../api/controller/estabelecimentos/');
var Cliente = require("./../api/model/Cliente");

//const cupom = require('../api/controller/cupons/');

const promocao 				= require('../api/controller/promocoes/');
const teste 					= require('../api/controller/testes/');
const cupom 					= require('../api/controller/cupons/');


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
//	server.use('/api', router)

	//app.use('/api/route', passport.authenticate('bearer')

	//server.use('/api', auth.passport.authenticate('jwt'), cliente.validar);

	//Para as rotas que precisam de validação
	server.use('/api', auth.passport.authenticate('jwt', { session: false }), router);

	//server.use(passport.initialize());
	server.get('/:key/teste/zonadetestes/:codigo', teste.zonadetestes);

	// cliente
	server.post('/:key/cliente', cliente.novo);
	server.get('/:key/cliente', cliente.buscarTodos);
	server.get('/:key/cliente/:id', cliente.buscar);
	server.put('/:key/cliente/:id', cliente.alterar);
	server.delete('/:key/cliente/:id', cliente.excluir);
  	server.post('/login', cliente.login);
  	server.get('/api/validar', cliente.validar);

	// estabelecimento
	server.post('/estabelecimento', estabelecimento.novo);
	server.get('/estabelecimento', estabelecimento.buscarTodos);
	server.get('/estabelecimento/:id', estabelecimento.buscar);
	server.put('/estabelecimento/:id', estabelecimento.alterar);
	server.delete('/estabelecimento/:id', estabelecimento.excluir);

	// promocoes
	server.post('/promocao', promocao.novo);
	server.get('/promocao', promocao.buscarTodos);
	server.get('/promocao/:id', promocao.buscar);
	server.put('/promocao/:id', promocao.alterar);
	server.delete('/promocao/:id', promocao.excluir);


  //	server.get('/teste/zonadetestes', teste.zonadetestes);


	// promocoes
	server.post('/cupom', cupom.novo);
	server.get('/cupom', cupom.buscarTodos);
	server.get('/cupom/:id', cupom.buscar);
	server.get('/cupom/:id/cliente', cupom.buscarPorCliente);
	server.get('/cupom/:id/promocao', cupom.buscarPorPromocao);
	server.put('/cupom/:id', cupom.alterar);
	server.delete('/cupom/:id', cupom.excluir);
	server.post('/cupom/:id/usar', cupom.usar);

	server.use(function(req, res, next){
		res.status(404);
		res.send(`{"mensagem":"erro","tipo":"servico inexistente"}`);
	});

	// Rotas de cliente da API
	const person = require('../api/person/personService')
	person.register(router, '/person')

}
