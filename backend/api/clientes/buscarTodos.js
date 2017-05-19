const connection = require('../../config/database');
module.exports = function buscarTodos(req, res) {

  const Cliente = connection.sequelize.define('clientes', {
    cli_nome: {
      type: connection.Sequelize.STRING
    },
    cli_email: {
      type: connection.Sequelize.STRING
    }
  },{timestamps: false});

  // you can also build, save and access the object with chaining:
Cliente.build({ cli_nome: 'foo', cli_email: 'bar' })
  .save()
  .then(anotherTask => {
    res.send('Sucesso ');
  })
  .catch(error => {
    // Ooops, do some error-handling
    res.send('Error ');
  })

}
