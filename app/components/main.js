const React = require('react');
const ReactDOM = require('react-dom');
const { createStore } = require('redux');
const todoAppReducer = require('../reducers/todoList');

const store = createStore(todoAppReducer);

/* Global Variables
	ctx:  available because there is no 'this' created with the simple ReactComponent
	key: index that will be incremented with each list item 
*/

let ctx = {}; 
let key = 0;


/*  Main Function :
	gets rendered into the body of index.html. It is our top level component */

const Main = ({
	intro: intro,
	todoList: todoList
}) => (
      <div>
        Title: {intro}
            <TodoList
		      todoList={todoList}
		    />
      </div>
	);


/*  TodoList Component :
	contained in the Main component */

const TodoList = ({ todoList }) => (
	<ul className="list">
		<input ref={(c) => ctx._input = c} />
	    {todoList.map(item => (<li key={key++}>{item.text}</li>))}
	    <button onClick={() =>
		        store.dispatch({
		          type: 'CREATE_NEW_ITEM',
		          id: 2,
		          text: ctx._input.value,
		          completed: false           
		        })}>+</button>
	</ul>

);

/* Some default props that wont change, 
   usually all our data will be static or
   returned from a back end service */
const staticProps = {
	intro: 'WELCOME HOME'
};

const startApp = () => {
	ReactDOM.render(<Main {...staticProps} todoList={store.getState()} />, document.getElementById('app'));
} 

store.subscribe(startApp);
startApp();