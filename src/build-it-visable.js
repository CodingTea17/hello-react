// OLD CLASSLESS & STATELESS
// const app = {
//   visable: false
// }
//
// const onToggleVisibility = () => {
//   app.visable = !app.visable;
//   render();
// }
//
// const render = () => {
//   const visableApp = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <p>{app.visable ? 'Surprise! I\'m visable!' : '' }</p>
//       <button onClick={onToggleVisibility}>{app.visable ? 'Click to Hide' : 'Click to Show'}</button>
//     </div>
//   );
//   ReactDOM.render(visableApp, document.getElementById('app'))
// }
//
// render();

class Visible extends React.Component {
  constructor(props) {
    super(props);
    this.onToggleVisibility = this.onToggleVisibility.bind(this);
    this.state = {
      visable: false
    }
  }

  onToggleVisibility() {
    console.log("I click");
    this.setState((prevState) => {
      return {
        visable: !prevState.visable
      };
    });
  }

  render() {
    return (
      <div>
      <h1>Visibility Toggle</h1>
      <p>{this.state.visable ? 'Surprise! I\'m visable!' : '' }</p>
      <button onClick={this.onToggleVisibility}>{this.state.visable ? 'Click to Hide' : 'Click to Show'}</button>
     </div>
    );
  }
}

ReactDOM.render(<Visible />, document.getElementById('app'));
