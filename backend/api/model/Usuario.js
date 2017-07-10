// CHAMADA ao mecanismo de conexão
const connection      = require('../../config/database');
//Model da classe cliente
const Usuario = connection.sequelize.define('usuarios', {
    usu_nome: {
      type: connection.Sequelize.STRING(70)
    },
    usu_email: {
      type: connection.Sequelize.STRING(70),
      validate:{
        isEmail: true
      }
    },
    usu_hashsenha: {
      type: connection.Sequelize.STRING(45)
    },
    usu_token_reset_senha: {
      type: connection.Sequelize.STRING(45)
    },
    usu_dt_criacao: {
      type: connection.Sequelize.DATE,
      defaultValue: connection.Sequelize.NOW
    },
    usu_dt_ult_alteracao: {
      type: connection.Sequelize.DATE,
      defaultValue: connection.Sequelize.NOW
    },
    usu_ativo: {
      type: connection.Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  },{timestamps: false}
);

module.exports = Usuario;
