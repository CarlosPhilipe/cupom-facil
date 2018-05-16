const Sequelize = require('sequelize');
// coloque o nome da base / usuário/ senha da sua máquina
const sequelize = new Sequelize('cupom_facil', 'root', 'senha aqui', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  logging: false

});

module.exports = {sequelize,Sequelize};
