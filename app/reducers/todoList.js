/* Reducers all take a state and an action,
ES6 allows us to take a default parameter as we are passing them in
Let's setup the default CRUD Operations here */


const TodoList = (state = [], action) => {
	switch (action.type) {
		case 'CREATE_NEW_ITEM':
			return [
			...state,
			{
				id: action.id,
				text: action.text,
				completed: action.completed || false
			}];
		default:
			return state;
	}
};


// export default TodoList;
// export { TodoList as default };
// export default x => x;
module.exports = TodoList;
