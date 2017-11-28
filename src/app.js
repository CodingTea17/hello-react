// JSX - JavaScript XML
console.log("App.js is running");

const app = {
  title: 'Indecision App',
  subtitle: 'It\'s raining',
  options: ['One', 'Two']
}

const template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    {<p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>}
    <p>Babel is actually pretty cool</p>
    <p>I am a p tag too</p>
  </div>
);

const user = {
  name: "Dawson Mortenson",
  age: 22,
  location: "PDX"
}

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}

const meTemplate = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    <p>Age: {user.age}</p>
    {getLocation(user.location)}
  </div>
);

let count = 0;

const increaseCount = () => {
  count += 1;
  renderCounterApp();
}
const decreaseCount = () => {
  count -= 1;
  renderCounterApp();
}
const resetCount = () => {
  count = 0;
  renderCounterApp();
}

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>+1</button>
      <button onClick={decreaseCount}>-1</button>
      <button onClick={resetCount}>reset</button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
}

renderCounterApp();
