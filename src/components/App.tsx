import { h, Component } from 'preact';

interface AppProps {
  name: string
}

export default class App extends Component<AppProps, any> {
  render(props: AppProps & preact.ComponentProps, state: any) {
    return (
      <div>
        <h1>Hello {props.name} !!</h1>
      </div>
    );
  }
}
