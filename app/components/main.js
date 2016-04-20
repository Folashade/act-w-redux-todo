const React = require('react');
const ReactDOM = require('react-dom');
const { createStore } = require('redux');
const todoAppReducer = require('../reducers/todoList');

const store = createStore(todoAppReducer);


const Main = ({
	intro: intro,
	value: value
}) => (
      <div>
        Title: {intro}
		{console.log('this ', this)}
        
            <Counter
		      value={value}
		      onIncrement={() =>
		        store.dispatch({
		          type: 'INCREMENT'           
		        })            
		      }
		    />
      </div>
	);

const Counter = ({ value, onIncrement }) => (
	<div>
		<h1>{value}</h1>
		<button onClick={onIncrement}>+</button>
	</div>
);


const staticProps = {
	intro: 'WELCOME HOME'
};

const startApp = () => {
	ReactDOM.render(<Main {...staticProps} value={store.getState()} />, document.getElementById('app'));
} 

store.subscribe(startApp);
startApp();