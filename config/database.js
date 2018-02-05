/**
 * Configuração base de dados / Database Configuration
 *
 * Português / English
 *
 * 	Host: Heroku mLab
 * 	Database Type: MongoDB
 * 	Database Name: heroku_jwprwsr5
 * 	User: renanlopes
 * 	Password: renanlopescoder
 *
 * 	PT: Configuração de base de dados local
 *  EN: Configuration of local database
 * 		mongoose.connect('mongodb://localhost/databaseName');
 *
 */

	let mongoose = require('mongoose');

	mongoose.Promise = global.Promise;

	mongoose.connect('mongodb://renanlopes:renanlopescoder@ds145312.mlab.com:45312/heroku_jwprwsr5', { useMongoClient: true });

/**
 * PT: Função para imprimir no console se a conxão com o banco foi efetuada
 * EN: Function to print in console if the database connection was a success
 */

	mongoose.connection.on('connected', function(){
		console.log('Conectado ao Banco MongoDB');
	});

/**
 * PT: Evitando derrubar aplicação caso não tenha conexão
 * EN: Avoiding close the application if not get the connection
 */

	mongoose.connection.on('error', function(error){
		console.log('Erro na conexão: ' + error);
	});

/**
 * EN: Evitando derrubar a app Caso perda de conexão
 * PT: Avoiding close the application if lost connection
*/

	mongoose.connection.on('disconnected', function(){
		console.log('Desconectado do banco MongoDB');
	});

/** PT: Process pode ser usado em qualquer lugar de nossa aplicação com o process podemos acessar as informações e eventos de nossa app, este caso estamos acessando o process para saber se a app foi finalizada e assim garantir a finalização da conexão com banco.
 * EN: Accessing the process to ensure close the database connection when the application finish
*/

	process.on('SIGINT', function(){
		mongoose.connection.close(function(){
			console.log('conexão fechada pelo temino da aplicação');
			process.exit(0);
		});
	});
