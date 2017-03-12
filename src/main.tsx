import { h, render } from 'preact';

let root;

function main() {
  let App = require('./components/App').default;
  root = render(<App name="World" />, document.body, root);
}

main();

if (module.hot) module.hot.accept('./components/App', main);
