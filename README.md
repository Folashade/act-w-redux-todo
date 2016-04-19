# README.md

## Terminal Commands for Setup
npm init
npm install react
npm install react-dom
npm install babel-loader babel-core babel-preset-es2015 babel-preset-react --save-dev

### Bundle the App
npm install webpack -g
webpack -w

### Add Redux
npm install --save redux

## Stateless Functional Components in React 0.14

**Traditional**
```
const Main = React.createClass({
  render: function(){
    return (
      <div>
        Traditinal Way to Create a React Component
      </div>
    )
  }
});
```
**Functional**
```
const Main = ({
	intro: intro
}) => (
      <div>
        Title: {intro}
      </div>
	);
```

## Reloading as you type
npm install webpack-dev-server -g (I had to install it globally since my webpack was globally installed)
add command you want to run to package.json for ease
webpack -w rebuilds the bundle file so that you can refresh when just pointing to a file
`file:///Users/tgifolashade/Development/Node_ReactJS/like-groceries/public/index.html`

webpack-dev-server [--optional-flags] runs on port 8080

## Resources
+ Babel Dependencies
  - https://www.twilio.com/blog/2015/08/setting-up-react-for-es6-with-webpack-and-babel-2.html

+ I did not use, but could help
  - http://survivejs.com/webpack_react/webpack_and_react/
  - https://robots.thoughtbot.com/setting-up-webpack-for-react-and-hot-module-replacement
  - [Cheat Sheets](https://egghead.io/react-redux-cheatsheets)

### Useful Commands
unstage files : git reset HEAD -- .

## TODO 
- Update to [React Router v2](https://github.com/reactjs/react-router/blob/master/upgrade-guides/v2.0.0.md)
- Add stylesheets. Maybe [Materialize](materializecss.com/) or React based [Material UI](http://www.material-ui.com/#/components/toolbar)
- add webpack-dev-server
