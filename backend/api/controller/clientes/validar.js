const Cliente = require('../../model/Cliente');
const auth = require('./../../../config/passport')

// autenticacoes
/*module.exports = auth.passport.authenticate('jwt', { session: false }),
    function(req, res){
     res.json({message: "Success! You can not see this without a token"});
};*/

module.exports =  function(req, res){
     res.json({message: "Success! You can not see this without a token :)"});
};