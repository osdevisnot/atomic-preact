import { h, Component, ComponentProps } from 'preact';
import styled from 'styled-components';
import { font, palette } from 'styled-theme';

const Label = styled.label`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 1)};
  font-size: 1em;
  line-height: 2em;
`;

export default Label;
