module.exports = function (app){

	var api = app.app.api.user;

	app.post('/update/user/:id', api.update);
};