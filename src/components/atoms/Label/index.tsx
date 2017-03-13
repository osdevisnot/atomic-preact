import { h, Component, ComponentProps } from 'preact';

export default class Label extends Component<any, any> {
  render(props: ComponentProps) {
    return <label>{props.children}</label>;
  }
}
