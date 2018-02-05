var mongoose = require('mongoose');

var schema = mongoose.Schema({
	username: {
		type: String,
		required: true
	},
	password : {
		type: String,
		required: true
	},
  email : {
		type: String,
		required: true
	},
	photo : {
		type: String,
		required: false
	},
	nickname: {
		type: String,
		required: false
	}
});

mongoose.model('User', schema);
