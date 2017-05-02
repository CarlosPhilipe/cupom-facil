const mongoose = require('mongoose')
module.exports = mongoose.connect('mongodb://localhost/db_cuponfacil')

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório!"