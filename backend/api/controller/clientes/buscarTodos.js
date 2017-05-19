const Cliente = require('../../model/Cliente');
module.exports = function buscarTodos(req, res) {

  // you can also build, save and access the object with chaining:
    Cliente.build({
       cli_nome: 'foo',
       cli_email: 'bar'
     })
    .save()
    .then(anotherTask => {
      res.send('Sucesso ');
    })
    .catch(error => {
      // Ooops, do some error-handling
      res.send('Error ');
    })

}
