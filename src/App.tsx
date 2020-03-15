import React from 'react';
import styled from 'styled-components';
import Calculator from './Calculator/Calculator';
import DJButtonBoard from './DjButtonBoard/DjButtonBoard'

const CalcWrapper = styled.div`
  height: 100%;
  width: 300px;
`;

const Text = styled.p`
  font-size: 15px;
`;
const DjWrapper = styled.div`
  height: 100%;
  width: 800px;
`;

function App() {
  return (
    <div>
      <CalcWrapper>
        <Calculator />
        <Text>
          This is built with a Button board component. The Idea been that you
          can bind functions to buttons on a board and lay them out in anyway you
          like. See below for an Example! It doesn't do anything but a console log. But it could
          be used for creating a DJ board, custom switch board or a game pad. 
        </Text>
      </CalcWrapper>
      <DjWrapper>
        <DJButtonBoard />
      </DjWrapper>
    </div>
  );
}

export default App;
