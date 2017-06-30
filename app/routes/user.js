module.exports = function (app){

	var api = app.app.api.user;

	app.put('/update/user/:id', api.update);
};