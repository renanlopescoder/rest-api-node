module.exports = (app) => {

	const action = app.src.actions.user;

	app.get('/users', action.list);

	app.post('/users/create', action.create);

	app.put('/users/edit/:id', action.update);

	app.get('/users/show/:id', action.searchById);

	app.delete('/users/remove/:id', action.deleteById);
};
