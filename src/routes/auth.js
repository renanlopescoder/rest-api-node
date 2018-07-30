module.exports = (src) => {

	const action = src.actions.auth;

	src.post('/login', action.login);

  /**
   *
   * PT: rota para autenticar o usuário usando Json Web Token
   * EN: route to authenticate the user using Json Web Token
   *
   * src.use('/*', action.verifyToken);
   */

};
