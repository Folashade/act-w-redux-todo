const React = require('react');

/* Stateless Funcional component, does not need React.createClass */
const Home = ({
	//props
}) => (
      <h2 className="text-center">
        Search For a Functional Component
      </h2>
);

/*
const Home = React.createClass({
  render: function(){
    return(
      <h2 className="text-center">
        Search For a Recipe
      </h2>
    )
  }
})
*/

module.exports = Home;