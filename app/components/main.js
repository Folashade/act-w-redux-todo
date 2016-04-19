const React = require('react');
const ReactDOM = require('react-dom');

const Main = ({
	intro: intro
}) => (
      <div>
        Title: {intro}
      </div>
	);


const defaultProps = {
	intro: 'WELCOME HOME'
};

ReactDOM.render(<Main {...defaultProps} />, document.getElementById('app'));