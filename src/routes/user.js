module.exports = (src) => {

	const action = src.actions.user;

	src.get('/users', action.list);

	src.post('/users/create', action.create);

	src.put('/users/update/:id', action.update);

	src.get('/users/select/:id', action.searchById);

	src.delete('/users/delete/:id', action.deleteById);
};
