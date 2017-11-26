"use strict";

console.log("App.js is running");

// JSX - JavaScript XML
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "p",
    null,
    "Babel is actually pretty cool"
  ),
  React.createElement(
    "p",
    null,
    "I'm a p tag too"
  )
);

var meTemplate = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Dawson Morenson"
  ),
  React.createElement(
    "p",
    null,
    "Age: 22"
  ),
  React.createElement(
    "p",
    null,
    "Location: PDX"
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(meTemplate, appRoot);
