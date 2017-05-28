// CHAMADA ao mecanismo de conexão
const connection = require('../../config/database');
//Model da classe cliente
const Cupom = connection.sequelize.define('cupons', {
    cup_usado: {
      type: connection.Sequelize.BOOLEAN
    },
    cup_dt_criacao: {
      type: connection.Sequelize.DATE
    },
    cup_dt_ult_alteracao: {
      type: connection.Sequelize.DATE
    },
    cup_ativo: {
      type: connection.Sequelize.BOOLEAN
    },
    cliente_id_cli: {
      type: connection.Sequelize.INTEGER
    },
    promocao_id_pro: {
      type: connection.Sequelize.INTEGER
    }
  },{
    timestamps: false
  }
);

module.exports = Cliente;
