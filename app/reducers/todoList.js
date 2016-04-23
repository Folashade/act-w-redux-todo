/* Reducers all take a state and an action,
ES6 allows us to take a default parameter as we are passing them in
Let's setup the default CRUD Operations here */


const TodoItem = (state = {}, action) => {
	switch (action.type) {

		case 'TOGGLE_TODO':
	     if (state.id !== action.id) {
	        return state;
	      }

	      return {
	        ...state,
	        completed: !state.completed
	      };
		default:
			return state;
	}
};

const TodoList = (state = [], action) => {
	switch (action.type) {
		case 'CREATE_NEW_ITEM':
			if (!action.text) {
				return state;
			}

			return [
			...state,
			{
				id: action.id,
				text: action.text,
				completed: action.completed || false
			}];
		case 'TOGGLE_TODO':
		      return state.map(t => TodoItem(t, action));
		default:
			return state;
	}
};


// export default TodoList;
// export { TodoList as default };
// export default x => x;
module.exports = TodoList;
