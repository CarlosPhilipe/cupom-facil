const personData = require('./person')

personData.methods(['get', 'post', 'put', 'delete'])
personData.updateOptions({new: true, runValidators: true})

personData.route('count', function(req, res, next) {
	personData.count(function(error, value) {
		if(error) {
			res.status(500).json({errors: [error]})
		} else {
			res.json({value})
		}
	})
})
module.exports = personData