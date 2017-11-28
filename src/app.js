// JSX - JavaScript XML
console.log("App.js is running");

const app = {
  title: 'Indecision App',
  subtitle: 'It\'s raining',
  options: ['One', 'Two']
}

const onResetOptions = () => {
  app.options = [];

  renderOptionsApp();
}

const onFormSubmit = (e) => {
  e.preventDefault();

  // Target the input named 'option' in the form
  const option = e.target.elements.option.value;

  // If it exists:
  // 1) push to the options array
  // 2) clear the input value in the form
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
  }
  renderOptionsApp();
}
const renderOptionsApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <p>{app.subtitle}</p>
      <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
      <p>{app.options.length}</p>
      <ol>
        {
          app.options.map((option) => <li key={option}>{option}</li>)
        }
      </ol>
      <button onClick={onResetOptions}>Remove All</button>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot)
}

const appRoot = document.getElementById('app');
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
