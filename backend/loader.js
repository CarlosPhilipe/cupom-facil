const server = require('./config/server')
const sequelize =  require('./config/database.js')
require('./config/routes')(server,sequelize)

module.exports = server;
