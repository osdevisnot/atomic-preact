import { h } from 'preact';
import { storiesOf } from '@kadira/storybook';
import Label from '.';

storiesOf('Label', module).add('default', () => <Label>Hello</Label>);
