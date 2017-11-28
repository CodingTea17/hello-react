'use strict';

// JSX - JavaScript XML
console.log("App.js is running");

var app = {
  title: 'Indecision App',
  subtitle: 'It\'s raining',
  options: ['One', 'Two']
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  React.createElement(
    'p',
    null,
    app.subtitle
  ),
  React.createElement(
    'p',
    null,
    app.options.length > 0 ? "Here are your options" : "No options"
  ),
  React.createElement(
    'p',
    null,
    'Babel is actually pretty cool'
  ),
  React.createElement(
    'p',
    null,
    'I am a p tag too'
  )
);

var user = {
  name: "Dawson Mortenson",
  age: 22,
  location: "PDX"
};

function getLocation(location) {
  if (location) {
    return React.createElement(
      'p',
      null,
      'Location: ',
      location
    );
  }
}

var meTemplate = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name ? user.name : 'Anonymous'
  ),
  React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  getLocation(user.location)
);

var count = 0;

var increaseCount = function increaseCount() {
  count += 1;
  renderCounterApp();
};
var decreaseCount = function decreaseCount() {
  count -= 1;
  renderCounterApp();
};
var resetCount = function resetCount() {
  count = 0;
  renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
  var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Count: ',
      count
    ),
    React.createElement(
      'button',
      { onClick: increaseCount },
      '+1'
    ),
    React.createElement(
      'button',
      { onClick: decreaseCount },
      '-1'
    ),
    React.createElement(
      'button',
      { onClick: resetCount },
      'reset'
    )
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
