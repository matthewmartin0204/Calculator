import React from 'react';
import style from 'styled-components';
import ButtonComponent from './Buttons/Button';
import {
  ButtonConfig,
  ButtonBoardStyle
} from '../ButtonBoard/ButtonBoard.interface';

const ButtonGrid = style.div`
  display: grid;
  grid-template-columns: ${props =>
    props.theme.gridTemplateColumns
      ? props.theme.gridTemplateColumns
      : '1fr 1fr 1fr 1fr'};
  grid-auto-rows: ${props =>
    props.theme.gridTemplateRows ? props.theme.gridTemplateRows : '50px'};
  grid-gap: 5px;
  background-color: ${props =>
    props.theme.backgroundColor ? props.theme.backgroundColor : 'black'};
  border-radius: 5px;
  padding: 5px;
`;

export default function ButtonBoard(props: {
  buttonConfig: ButtonConfig[];
  theme?: ButtonBoardStyle;
}) {
  return (
    <ButtonGrid theme={props.theme}>
      {props.buttonConfig.map((config, index) => {
        const { callback, value, theme } = config;
        return (
          <ButtonComponent
            callback={callback}
            value={value}
            theme={theme}
            key={index}
          />
        );
      })}
    </ButtonGrid>
  );
}
