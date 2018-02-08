module.exports = (src) => {

	const action = src.actions.project;

	src.get('/projects', action.list);

	src.post('/projects/create', action.create);

	src.put('/projects/update/:id', action.update);

	src.get('/projects/select/:id', action.searchById);

	src.delete('/projects/delete/:id', action.deleteById);
};
