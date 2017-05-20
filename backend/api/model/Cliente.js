// CHAMADA ao mecanismo de conexão
const connection = require('../../config/database');
//Model da classe cliente
const Cliente = connection.sequelize.define('clientes', {
    cli_nome: {
      type: connection.Sequelize.STRING(70)
    },
    cli_email: {
      type: connection.Sequelize.STRING(70),
      validate:{
        isEmail: true
      }
    },
    cli_hashsenha: {
      type: connection.Sequelize.STRING(45)
    },
    cli_token_reset_senha: {
      type: connection.Sequelize.STRING(45)
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
    cli_ativo: {
      type: connection.Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  },{timestamps: false}
);

module.exports = Cliente;
