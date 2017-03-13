import { h } from 'preact';
import { injectGlobal, ThemeProvider } from 'styled-components';

import theme from './themes/default';
import Label from './atoms/Label';

injectGlobal`
  body {
    margin: 20px;
  }
`;

const App = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
      <Label>This is a styled label</Label>
    </ThemeProvider>
  );
};

export default App;
