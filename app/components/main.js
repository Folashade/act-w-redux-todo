const React = require('react');
const ReactDOM = require('react-dom');

const Main = React.createClass({
  render: function(){
    return (
      <div>
        Change me YES
      </div>
    )
  }
});

ReactDOM.render(<Main />, document.getElementById('app'));