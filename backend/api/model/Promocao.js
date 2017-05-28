// CHAMADA ao mecanismo de conexão
const connection = require('../../config/database');
//Model da classe promocao
const Promocao = connection.sequelize.define('promocoes', {
    pro_titulo: {
      type: connection.Sequelize.STRING(70)
    },
    pro_regulamento: {
      type: connection.Sequelize.TEXT
    },
    pro_img_fundo: {
      type: connection.Sequelize.STRING(70)
    },
    pro_img_chamada: {
      type: connection.Sequelize.STRING(70)
    },
    pro_validade: {
      type: connection.Sequelize.DATE
    },
    pro_valor: {
      type: connection.Sequelize.DOUBLE
    },
    pro_qtd_cupom: {
      type: connection.Sequelize.INTEGER
    },
    pro_ativo: {
      type: connection.Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    estabelecimento_id_est: {
      type: connection.Sequelize.INTEGER
    }
  },{
    timestamps: false
  }
);

module.exports = Promocao;
