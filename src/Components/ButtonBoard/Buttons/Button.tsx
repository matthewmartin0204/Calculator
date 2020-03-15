import React from 'react';
import styled from 'styled-components';
import { ButtonConfig } from '../ButtonBoard.interface';

const Button = styled.button`
  font-size: 15px;
  font-weight: bold;
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: inherit;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 4px;
  background-color: ${props =>
    props.theme.backgroundColor ? props.theme.backgroundColor : '#FA9039'};
  color: ${props => (props.theme.color ? props.theme.color : '#FFFFFF')};
  grid-column-end: span
    ${props => (props.theme.gridColumnSpan ? props.theme.gridColumnSpan : 1)};
  grid-row-end: span
    ${props => (props.theme.gridRowSpan ? props.theme.gridRowSpan : 1)};
  &:active {
    background-color: '#FF2500';
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
  &:hover {
    background-color: '#FF7500';
  }
`;

export default function ButtonComponent(props: ButtonConfig) {
  const { callback, value, theme } = props;

  return (
    <Button theme={theme} value={value} onClick={e => callback(e)}>
      {value}
    </Button>
  );
}
