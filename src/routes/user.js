module.exports = (src) => {

	const action = src.actions.user;

	src.get('/users', action.list);

	src.post('/users/create', action.create);

	src.put('/users/edit/:id', action.update);

	src.get('/users/show/:id', action.searchById);

	src.delete('/users/remove/:id', action.deleteById);
};
