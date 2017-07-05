const server = require('./config/server')
const connection =  require('./config/database')
const passport = require('./config/passport')

require('./config/routes')(server,connection, passport)

module.exports = server;
