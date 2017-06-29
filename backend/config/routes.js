const express = require('express');
// Acessível dentro da pasta controller
const cliente = require('../api/controller/clientes/');
const estabelecimento = require('../api/controller/estabelecimentos/');
const promocao = require('../api/controller/promocoes/');
//const cupom = require('../api/controller/cupons/');


/*---------------Autenticação ----------------------------*/
const Cliente = require('../api/model/Cliente');
 
var jwt = require('jsonwebtoken');

var passport = require("passport");
var passportJWT = require("passport-jwt");

var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;

var jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeader();
jwtOptions.secretOrKey = 'everybodyneedtheCesarasteacher';

var strategy = new JwtStrategy(jwtOptions, function(jwt_payload, next) {
  console.log('payload received', jwt_payload);
  Cliente.findAll({
    where: {
      id: jwt_payload.id
    }

  }).then(result => {
    next(null, result);

  }).catch(error => {
    next(null, false);
  })
});

passport.use(strategy);

/*---------------------------------------------------------*/

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
	server.use(passport.initialize());


	// cliente
	server.post('/cliente', cliente.novo);
	server.get('/cliente', cliente.buscarTodos);
	server.get('/cliente/:id', cliente.buscar);
	server.put('/cliente/:id', cliente.alterar);
	server.delete('/cliente/:id', cliente.excluir);

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

	// promocoes
	// server.post('/cupom', cupom.novo);
	// server.get('/cupom', cupom.buscarTodos);
	// server.get('/cupom/:id', cupom.buscar);
	// server.put('/cupom/:id', cupom.alterar);
	// server.delete('/cupom/:id', cupom.excluir);

	// autenticacoes
	server.post('/login', function (req, res) {
		Cliente.findAll({
			where: {
			cli_email: req.body.cli_email,
			cli_hashsenha: req.body.cli_hashsenha
			}
		}).then(result => {
			var payload = {id: result.id};
			var token = jwt.sign(payload, jwtOptions.secretOrKey);
			res.json({message: "ok", token: token});
		}).catch(error => {
			res.status(401).json({message:"no such user found"});
		})

	});

	server.get("/secret", passport.authenticate('jwt', { session: false }),
	 function(req, res){
	  res.json({message: "Success! You can not see this without a token"});
	});


	// Rotas de cliente da API
	const person = require('../api/person/personService')
	person.register(router, '/person')


}
