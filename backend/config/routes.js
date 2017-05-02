const express = require('express')

module.exports = function(server) {
	
	// API Routes
	const router = express.Router()
	server.use('/api', router)

	// Rotas de cliente da API
	const person = require('../api/person/personService')
	person.register(router, '/person')
}