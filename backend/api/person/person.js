const restful = require('node-restful')
const mongoose = restful.mongoose

const personData = new mongoose.Schema({
	firstName: { type: String, required: true},
	lastName: { type: String, required: true},
	cpf: { type: Number, required: true},
	dob: { type: Number, required: true},
	phone: { type: Number }
})

module.exports = restful.model('person', personData)