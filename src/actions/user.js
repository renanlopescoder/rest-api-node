const mongoose = require('mongoose');
const mailService = require('../services/mail.js');
const bcrypt = require('bcrypt');
const saltRounds = 15;
const transporter = mailService.config();
const model = mongoose.model('User');

let actions = {};

actions.list = (req, res) => {
	model.find({})
		.then(users => res.status(200).json(users))
		.catch(error => res.status(500).json(error))
};

actions.create = (req,res) => {
	bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
		req.body.password = hash;
		model.create(req.body).then(
			(user) => {
				const content = mailService.content(req.body.email);
				transporter.sendMail(content);
				res.status(200).json(user);
			})
			.catch(error => res.status(404).json(error))
	})
};

actions.searchById = (req, res) => {
	model.findById(req.params.id)
		.then(user => res.status(200).json(user))
		.catch(error => res.status(404).json(error))
};

actions.deleteById = (req, res) => {
	model.remove({_id: req.params.id})
		.then(() => res.status(200))
		.catch(() => res.status(404).json(error))
};

actions.update = (req,res) => {
	bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
		req.body.password = hash;
		model.findByIdAndUpdate(req.params.id, req.body)
		.then(user => res.status(200).json(user))
		.catch(error => res.status(404).json(error))
	})
};

module.exports = actions;
