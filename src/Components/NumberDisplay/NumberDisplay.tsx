import styled from 'styled-components';
import React from 'react';

const Display = styled.div`
  width: 100%;
  background-color: #1f1f1f;
  color: #ffffff;
  border-radius: 5px;
  margin: 3px 0px;
`;

const Value = styled.p`
  height: 60px;
  text-align: right;
  font-size: 50px;
  margin: 0 10px;
`;

export default function NumberDisplay(props: { value: string }) {
  return (
    <Display>
      <Value>{props.value}</Value>
    </Display>
  );
}
