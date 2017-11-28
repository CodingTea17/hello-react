const app = {
  visable: false
}

const onToggleVisibility = () => {
  app.visable = !app.visable;
  render();
}

const render = () => {
  const visableApp = (
    <div>
      <h1>Visibility Toggle</h1>
      <p>{app.visable ? 'Surprise! I\'m visable!' : '' }</p>
      <button onClick={onToggleVisibility}>{app.visable ? 'Click to Hide' : 'Click to Show'}</button>
    </div>
  );
  ReactDOM.render(visableApp, document.getElementById('app'))
}

render();
