import { h, render } from 'preact';

if (process.env.NODE_ENV === 'production') {
  const runtime = require('offline-plugin/runtime');
  runtime.install();
}

let root;

function main() {
  let App = require('./components/App').default;
  root = render(<App name="World" />, document.body, root);
}

main();

if (module.hot) module.hot.accept('./components/App', main);
