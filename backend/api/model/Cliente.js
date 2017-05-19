const connection = require('../../config/database');
const Cliente = connection.sequelize.define('clientes', {
    cli_nome: {
      type: connection.Sequelize.STRING
    },
    cli_email: {
      type: connection.Sequelize.STRING
    }
  },{timestamps: false}
);

module.exports = Cliente;
