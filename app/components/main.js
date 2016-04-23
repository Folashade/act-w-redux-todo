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

/* styles */
const add = "waves-effect waves-light btn";
const inputStyles = {'maxWidth' : '80%', 'marginRight' : '20px'};

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
	
	<div className="container">

		<input type="text" className="inputClass" style={inputStyles} ref={(c) => ctx._input = c} />

	    <button className={add} onClick={() =>
		        store.dispatch({
		          type: 'CREATE_NEW_ITEM',
		          id: key++,
		          text: ctx._input.value,
		          completed: false           
		        })}>+</button>


	    <div className="collection">
		    {todoList.map(item => (
		    	<a href="#!" key={`item-${item.id}`} className={`collection-item ${item.completed ? 'completed' : ''}`} onClick={() =>
		        store.dispatch({
		          type: 'TOGGLE_TODO',
		          id: item.id       
		        })}>{item.id + ' ' + item.text}
			    	<i className="material-icons right">close</i>
		    	</a>
			))}
		</div>
	</div>

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