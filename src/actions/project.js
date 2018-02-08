const mongoose = require('mongoose');
const model = mongoose.model('Project');

let actions = {};

actions.list = (req, res) => {
	model.find({})
		.then(projects => res.status(200).json(projects))
		.catch(error => res.status(500).json(error))
};

actions.create = (req, res) => {
	model.create(req.body)
		.then(user => res.json(user))
		.catch(error => res.status(500).json(error))
};

actions.searchById = (req, res) => {
	model.findById(req.params.id)
		.then(project => res.status(200).json(project))
		.catch(error => res.status(404).json(error))
};

actions.deleteById = (req, res) => {
	model.remove({_id: req.params.id})
		.then(() => res.status(200))
		.catch(() => res.status(404).json(error))
};

actions.update = (req, res) => {
	model.findByIdAndUpdate(req.params.id, req.body)
		.then(project => res.status(200).json(project))
		.catch(error => res.status(404).json(error))
};

module.exports = actions;
