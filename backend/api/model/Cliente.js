// CHAMADA ao mecanismo de conexão
const connection      = require('../../config/database');
//Model da classe cliente
const Cliente = connection.sequelize.define('clientes', {
    usu_id:{
      type: connection.Sequelize.INTEGER(45)
    },
    cli_dt_nascimento: {
      type: connection.Sequelize.DATE
    },
    cli_sexo: {
      type: connection.Sequelize.STRING(4)
    },
    cli_dt_criacao: {
      type: connection.Sequelize.DATE,
      defaultValue: connection.Sequelize.NOW
    },
    cli_dt_ult_alteracao: {
      type: connection.Sequelize.DATE,
      defaultValue: connection.Sequelize.NOW
    },
    est_key: {
      type: connection.Sequelize.STRING(45)
    }
  },{timestamps: false}
);

module.exports = Cliente;
