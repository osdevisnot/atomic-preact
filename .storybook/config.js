import { h } from 'preact';
import { configure, addDecorator } from '@kadira/storybook';
import { ThemeProvider } from 'styled-components';

import theme from '../src/components/themes/default';

const req = require.context('../src/components', true, /.stories.(t|j)sx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);

configure(loadStories, module);
