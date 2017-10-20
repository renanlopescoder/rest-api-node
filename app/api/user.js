var mongoose = require('mongoose');
let mail = require('../services/mail.js');
let transporter = mail().getMail();
var api = {};

var model = mongoose.model('User');

api.list = function (req, res){
	model.find({},function(error, list){
		if(error){
			res.status(500).json(error);
		}
		res.json(list);
	}); 

};

api.create = function(req, res){
	model
		.create(req.body).then(function(dados){
			let mailOptions = {
				from: '"Node API" <rest-api-node@gmail.com>',
				to: req.body.email,
				subject: 'Welcome to Node API',
				html: '<p>Welcome to Node API!</p>'
					+'<p>This API is developed to provide Front End developers with a server and database configurations for connection testing and to provide a visualization of the data streamlining for the development process. The API provides HTTP methods via AJAX requests to collect, insert and update the given data.</p>'
					+'Github: <a href="https://github.com/renanlopescoder/rest-api-node">rest-api-node</a>'
					+'<br><br>Happy Hack!,'
					+'<br>Node API Team 🤖'
					+'<br><img src="http://pluspng.com/img-png/github-octocat-logo-vector-png--896.jpg" alt="Github Logo" height="82" width="82">'
					+'<img src="http://mean.io/wp-content/themes/twentysixteen-child/images/nodejs.png" alt="Node Logo" height="52" width="217">'
		};
		transporter.sendMail(mailOptions, (error, info) => {
				if (error) {
						return console.log(error);
				}
				console.log('Message %s sent: %s', info.messageId, info.response);
		});
		res.json(dados);
	}, function(error){
		console.log(error);
		res.status(404).json(error);
	});

};

api.searchById = function(req,res){

	model
		.findById(req.params.id)
		.then(function(id){

			res.json(id);

		}, function(error){
		console.log(error);
		res.status(404).json(error);
	});
	
};

api.deleteById = function(req,res){
	model.remove({_id: req.params.id})
	.then(function(){
		res.sendStatus(200);
	}, function(error){
		console.log(error);
		res.status(404).json (error);
	});

};

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