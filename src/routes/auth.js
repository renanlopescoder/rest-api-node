module.exports = (src) => {

	const action = src.actions.auth;

	src.post('/login', action.login);

  /**
   *
   * PT: rota para autenticar o usuário usando Json Web Token
   *   adicione rota para criar user antes do use middleware para habilitar criacao de usuario sem token de autenticacao
   *
   * EN: route to authenticate the user using Json Web Token
   *   add the create user route before the authentication to be able to create user without auth token
   *
   * src.post('/users/create', action.create);
   * src.use('/*', action.verifyToken);
   */

};
