// CHAMADA ao mecanismo de conexão
const connection = require('../../config/database');
//Model da classe Estabelecimento
const Estabelecimento = connection.sequelize.define('estabelecimentos', {
    usu_id:{
      type: connection.Sequelize.INTEGER(45)
    },
    est_key: {
      type: connection.Sequelize.STRING(45)
    },
    est_logo: {
      type: connection.Sequelize.STRING(70)
    },
    est_cep: {
      type: connection.Sequelize.STRING(9)
    },
    est_bairro: {
      type: connection.Sequelize.STRING(45)
    },
    est_rua: {
      type: connection.Sequelize.STRING(45)
    },
    est_numero: {
      type: connection.Sequelize.STRING(45)
    },
    est_complemento: {
      type: connection.Sequelize.STRING(45)
    },
    est_dt_criacao: {
      type: connection.Sequelize.DATE,
      defaultValue: connection.Sequelize.NOW
    },
    est_dt_ult_alteracao: {
      type: connection.Sequelize.DATE,
      defaultValue: connection.Sequelize.NOW
    }
  },{timestamps: false}
);

module.exports = Estabelecimento;
