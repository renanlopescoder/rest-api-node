var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

/**
 * Heroku open-source access database
 * @description Acesso a base de dados open-source pelo Heroku
 * mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds031893.mlab.com:31893/DatabaseName');
 */
mongoose.connect('mongodb://renanlopes:hackathon@ds157631.mlab.com:57631/heroku_w0z9xgcn');

// Função para imprimir no console se a conxão com o banco foi efetuada
// Function to print in console if the database connection was a success

mongoose.connection.on('connected', function(){
	console.log('Conectado ao Banco MongoDB');
});

//Evitando derrubar aplicação caso não tenha conexão
//Avoiding close the application if not get the connection

mongoose.connection.on('error', function(error){
	console.log('Erro na conexão: ' + error);
});

//Evitando derrubar a app Caso perda de conexão
//Avoiding close the application if lost connection

mongoose.connection.on('disconnected', function(){
	console.log('Desconectado do banco MongoDB');
});

// Process pode ser usado em qualquer lugar de nossa aplicação
// process podemos acessar as informações e eventos de nossa app
// este caso estamos acessando o process para saber se a app foi finalizada
// e assim garantir a finalização da conexão com banco

process.on('SIGINT', function(){
	mongoose.connection.close(function(){
		console.log('conexão fechada pelo temino da aplicação');

		//Função esperada por finalização da aplicação
		//Function expected for finish the application

		process.exit(0);
	});
});