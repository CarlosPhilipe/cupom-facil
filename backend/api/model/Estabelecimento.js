// CHAMADA ao mecanismo de conexão
const connection = require('../../config/database');
//Model da classe Estabelecimento
const Estabelecimento = connection.sequelize.define('estabelecimentos', {
    est_key: {
      type: connection.Sequelize.STRING(45)
    },
    est_token_reset_senha: {
      type: connection.Sequelize.STRING(45)
    },
    est_nome: {
      type: connection.Sequelize.STRING(70)
    },
    est_email: {
      type: connection.Sequelize.STRING(70),
      validate:{
        isEmail: true
      }
    },
    est_hashsenha: {
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
    },
    est_ativo: {
      type: connection.Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  },{timestamps: false}
);

module.exports = Estabelecimento;
