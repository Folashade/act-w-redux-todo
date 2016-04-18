const React = require('react');
const Main = require('../components/main');
const Home = require('../components/home');
const Router = require('react-router');
const Route = Router.Route;
const IndexRoute = Router.IndexRoute;

module.exports = (
  <Route path="/" component={Main}>
    <IndexRoute component={Home} />
  </Route>
);