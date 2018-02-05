const mongoose = require('mongoose');
const model = mongoose.model('Project');

let actions = {};

actions.list = function (req, res){
	model.find({},function(error, list){
		if(error){
			res.status(500).json(error);
		}
		res.json(list);
	});

};

actions.create = function(req, res){
	model
		.create(req.body).then(function(dados){
		res.json(dados);
	}, function(error){
		console.log(error);
		res.status(404).json(error);
	});

};

actions.searchById = function(req,res){

	model
		.findById(req.params.id)
		.then(function(id){

			res.json(id);

		}, function(error){
		console.log(error);
		res.status(404).json(error);
	});

};

actions.deleteById = function(req,res){
	model.remove({_id: req.params.id})
	.then(function(){
		res.sendStatus(200);
	}, function(error){
		console.log(error);
		res.status(404).json (error);
	});

};

actions.update = function(req,res){
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

module.exports = actions;
