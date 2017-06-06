module.exports = function (app){

	var api = app.app.api.mvpData;

	app.get('/list/mvpData', api.lista);

	app.post('/create/mvpData', api.create);

	app.post('/update/mvpData/:id', api.update);

	app.get('/select/mvpData/:id', api.buscaPorId);

	app.delete('/delete/mvpData/:id', api.removePorId);
};