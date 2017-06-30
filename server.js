var http = require('http');
var server = require('./config/express');
require('./config/database');

var port =  process.env.PORT || 3000;

server.listen(port, function(){
	console.log('Servidor Iniciado');
}); 

