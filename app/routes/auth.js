module.exports = function (app){

	var api = app.app.api.auth;

	app.post('/login', api.login);
  app.post('/createUser', api.createUser);

  /**
   * 
   * PT: rota para autenticar o usuário usando Json Web Token
   * EN: route to authenticate the user using Json Web Token
   * 
   * app.use('/*', api.verifyToken);  
   */

};
