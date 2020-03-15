import { calcButtonConfig } from './CalculatorConfig';
import ButtonBoard from '../Components/ButtonBoard/ButtonBoard';
import React, { useState } from 'react';
import styled from 'styled-components';
import NumberDisplay from '../Components/NumberDisplay/NumberDisplay';
import { evaluate } from 'mathjs';

const CalcWrapper = styled.div`
  border-radius: 5px;
  background-color: #d3d3d3;
  padding: 5px;
`;

/**
 * Compares the last input with the most recent one, function
 * prevents arthritic operators from been chained together and causing an error
 * @param value the current string in state
 * @param currentChar the value of the most recently clicked button
 */
const checkPriorClick = (value: string, currentChar: string): boolean => {
  const lastChar = value[value.length - 1];
  return (
    ['-', '/', '*', '+'].some(char => lastChar === char) &&
    ['-', '/', '*', '+'].some(char => currentChar === char)
  );
};

/**
 * Checks if the value is to great to be shown on the calculator screen and trims
 * decimal places
 * @param value the string whose length is been checked
 * @param exceedValue the digits that are been displayed
 */
const trimIfValueExceeded = (value: string, exceedValue: number): string => {
  if (value.length > exceedValue && value.includes('.')) {
    return value.slice(0, exceedValue);
  }
  return value;
};

export default function Calculator() {
  const [state, setState] = useState('');
  /**
   * The callback and function that handles input into the calculator
   * @param e the event that is passed from the click on the button board
   */
  const buttonCallback = (e: React.ChangeEvent<HTMLInputElement>) => {
    const buttonVal = e.target.value;
    if (checkPriorClick(state, buttonVal)) {
      setState(state);
      return;
    }
    switch (buttonVal) {
      case 'AC':
        setState('');
        return;
      case 'C':
        setState(state.substring(0, state.length - 1));
        return;
      case '=':
        setState(trimIfValueExceeded(evaluate(state), 10));
        return;
    }
    setState(state + buttonVal);
  };

  return (
    <CalcWrapper>
      <NumberDisplay value={state} />
      <ButtonBoard buttonConfig={calcButtonConfig(buttonCallback)} />
    </CalcWrapper>
  );
}
