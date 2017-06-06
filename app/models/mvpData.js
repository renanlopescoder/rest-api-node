var mongoose = require('mongoose');

var schema = mongoose.Schema({
	nickname: {
		type: String,
		required: false
	},
	name: {
		type: String,
		required: false
	},
	email: {
		type: String,
		required: false
	},
	team: {
		type: String,
		required: false
	},
	hackathon: {
		type: String,
		required: false
	},
	active: {
		type: String,
		required: false
	} 
});

mongoose.model('Data', schema);
