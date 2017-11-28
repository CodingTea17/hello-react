'use strict';

// JSX - JavaScript XML
console.log("App.js is running");

var app = {
  title: 'Indecision App',
  subtitle: 'It\'s raining',
  options: ['One', 'Two']
};

var onResetOptions = function onResetOptions() {
  app.options = [];

  renderOptionsApp();
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();

  // Target the input named 'option' in the form
  var option = e.target.elements.option.value;

  // If it exists:
  // 1) push to the options array
  // 2) clear the input value in the form
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
  }
  renderOptionsApp();
};
var renderOptionsApp = function renderOptionsApp() {
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
      app.options.length
    ),
    React.createElement(
      'ol',
      null,
      app.options.map(function (option) {
        return React.createElement(
          'li',
          { key: option },
          option
        );
      })
    ),
    React.createElement(
      'button',
      { onClick: onResetOptions },
      'Remove All'
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById('app');
renderOptionsApp();
// Example meTemplate
// const user = {
//   name: "Dawson Mortenson",
//   age: 22,
//   location: "PDX"
// }
//
// function getLocation(location) {
//   if (location) {
//     return <p>Location: {location}</p>;
//   }
// }
//
// const meTemplate = (
//   <div>
//     <h1>{user.name ? user.name : 'Anonymous'}</h1>
//     <p>Age: {user.age}</p>
//     {getLocation(user.location)}
//   </div>
// );

// Counter Example
// let count = 0;
//
// const increaseCount = () => {
//   count += 1;
//   renderCounterApp();
// }
// const decreaseCount = () => {
//   count -= 1;
//   renderCounterApp();
// }
// const resetCount = () => {
//   count = 0;
//   renderCounterApp();
// }
//
// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={increaseCount}>+1</button>
//       <button onClick={decreaseCount}>-1</button>
//       <button onClick={resetCount}>reset</button>
//     </div>
//   );
//
//   ReactDOM.render(templateTwo, appRoot);
// }
//
// renderCounterApp();
