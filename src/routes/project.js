module.exports = (app) => {

	const action = app.src.actions.project;

	app.get('/projects', action.list);

	app.post('/projects/create', action.create);

	app.put('/projects/update/:id', action.update);

	app.get('/projects/select/:id', action.searchById);

	app.delete('/projects/delete/:id', action.deleteById);
};
