/** @jsx React.DOM */
var React = require('react');
var TweetsApp = require('./components/TweetsApp.react');

// Snag the initial state that was passed from the server side
var initialState = JSON.parse(document.getElementById('initial-state').innerHTML);

React.renderComponent(
  <TweetsApp tweets={initialState} />,
  document.getElementById('react-app')
);
