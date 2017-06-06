var mongoose = require('mongoose');
var api = {};

var model = mongoose.model('User');

api.update = function(req,res){
 console.log(req.body);
	model
		.findByIdAndUpdate(req.params.id, req.body)
		.then(function(dado){
			
			res.json(dado);

		}, function(error){
		console.log(error);
		res.status(404).json(error);
	});
};




module.exports = api;