const server = require('./config/server')
const connection =  require('./config/database')
require('./config/routes')(server,connection)

module.exports = server;
