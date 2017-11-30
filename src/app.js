// JSX - JavaScript XML
console.log("App.js is running");

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    }
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem("count");
      const count = JSON.parse(json, 10);
      if (!isNaN(count)) {
        this.setState(() => ({count}));
      }
    } catch(e) {
      // Do nada
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.count != this.state.count) {
      const json = JSON.stringify(this.state.count);
      localStorage.setItem("count", json);
    }
  }

  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  }
  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      };
    });
  }

  handleReset() {
    this.setState(() => {
      return {
        count: 0
      }
    })
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

// count={5} will set the initial count to 5
ReactDOM.render(<Counter />, document.getElementById('app'));
// const app = {
//   title: 'Indecision App',
//   subtitle: 'It\'s raining',
//   options: ['One', 'Two']
// }
//
// const onResetOptions = () => {
//   app.options = [];
//
//   renderOptionsApp();
// }
//
// const onFormSubmit = (e) => {
//   e.preventDefault();
//
//   // Target the input named 'option' in the form
//   const option = e.target.elements.option.value;
//
//   // If it exists:
//   // 1) push to the options array
//   // 2) clear the input value in the form
//   if (option) {
//     app.options.push(option);
//     e.target.elements.option.value = '';
//   }
//   renderOptionsApp();
// }
//
// const onMakeDecision = () => {
//   const randomNum = Math.floor(Math.random() * app.options.length)
//   const option = app.options[randomNum];
//   console.log("You should " + option);
//   renderOptionsApp();
// }
//
// const renderOptionsApp = () => {
//   const template = (
//     <div>
//       <h1>{app.title}</h1>
//       <p>{app.subtitle}</p>
//       <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
//       <p>{app.options.length}</p>
//       <ol>
//         {
//           app.options.map((option) => <li key={option}>{option}</li>)
//         }
//       </ol>
//       <button disabled={app.options.length === 0} onClick={onMakeDecision}>What Should I Do?</button>
//       <button onClick={onResetOptions}>Remove All</button>
//       <form onSubmit={onFormSubmit}>
//         <input type="text" name="option"/>
//         <button>Add Option</button>
//       </form>
//     </div>
//   );
//   ReactDOM.render(template, appRoot)
// }
//
// const appRoot = document.getElementById('app');
// renderOptionsApp();
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
