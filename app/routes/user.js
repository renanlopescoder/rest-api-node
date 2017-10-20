module.exports = function (app){
	
	var api = app.app.api.user;

	app.get('/list/users', api.list);

	app.post('/create/users', api.create);

	app.put('/update/users/:id', api.update);

	app.get('/select/users/:id', api.searchById);

	app.delete('/delete/users/:id', api.deleteById);
};