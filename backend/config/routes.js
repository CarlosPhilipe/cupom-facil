const express = require('express');
// Acessível dentro da pasta controller
const cliente = require('../api/controller/clientes/');
const estabelecimento = require('../api/controller/estabelecimentos/');
const promocao = require('../api/controller/promocoes/');
const teste = require('../api/controller/testes/');


var Cliente = require("./../api/model/Cliente");

//const cupom = require('../api/controller/cupons/');


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
	server.use('/api', router)
	//server.use(passport.initialize());


	// cliente
	server.post('/:key/cliente', cliente.novo);
	server.get('/:key/cliente', cliente.buscarTodos);
	server.get('/:key/cliente/:id', cliente.buscar);
	server.put('/:key/cliente/:id', cliente.alterar);
	server.delete('/:key/cliente/:id', cliente.excluir);
  	server.post('/login', cliente.login);


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
	// server.post('/cupom', cupom.novo);
	// server.get('/cupom', cupom.buscarTodos);
	// server.get('/cupom/:id', cupom.buscar);
	// server.put('/cupom/:id', cupom.alterar);
	// server.delete('/cupom/:id', cupom.excluir);

	//autenticacoes
	/* server.post('/login', function (req, res) {
	 	Cliente.findAll({
	 		where: {
	 		cli_email: req.body.cli_email,
	 		cli_hashsenha: req.body.cli_hashsenha
	 		}
	 	}).then(result => {
	 		if(result.length!=0){
		 		var payload = {id: 1};
		 		var token = auth.jwt.sign(payload, auth.jwtOptions.secretOrKey);
		 		res.json({message: "ok", token: token});
	 		}else{
	 			res.status(401).json({message:"Ninguém encontrado!"});
	 		}
	 	}).catch(error => {
	 		res.status(401).json({message:"Erro!"});
	 	})
  
	 });*/

	 server.get("/secret", auth.passport.authenticate('jwt', { session: false }),
	  function(req, res){
	   res.json({message: "Success! You can not see this without a token"});
	 });


	// Rotas de cliente da API
	const person = require('../api/person/personService')
	person.register(router, '/person')


}
