var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('main');
var Timer = require('timer');
var Countdown = require('countdown');

// //load foundation 
// require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation()

//app css
require('style!css!sass!applicationStyles')

ReactDOM.render(
    <Router history={hashHistory}>
        <Router path="/" component={Main}>
            <IndexRoute component={Timer}></IndexRoute>
            <Route path="/countdown" component={Countdown}></Route>  
        </Router>
    </Router>,
    document.getElementById('app')
);
  