module.exports = function (app){

	var api = app.app.api.project;

	app.get('/list/projects', api.list);

	app.post('/create/project', api.create);

	app.put('/update/project/:id', api.update);

	app.get('/select/project/:id', api.searchById);

	app.delete('/delete/project/:id', api.deleteById);
};