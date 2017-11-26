console.log("App.js is running");

// JSX - JavaScript XML
var template = (
  <div>
    <p>Babel is actually pretty cool</p>
    <p>I'm a p tag too</p>
  </div>
);

var meTemplate = (
  <div>
    <h1>Dawson Morenson</h1>
    <p>Age: 22</p>
    <p>Location: PDX</p>
  </div>
);



var appRoot = document.getElementById('app');

ReactDOM.render(meTemplate, appRoot);
