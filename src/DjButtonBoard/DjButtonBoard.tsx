import { DJBoardConfig, boardTheme } from './DjButtonBoardConfig';
import ButtonBoard from '../Components/ButtonBoard/ButtonBoard';
import React from 'react'

const logSomething = () => {
  console.log('Dj Board is on the groove')
}

export default function DJButtonBoard() {
  return <ButtonBoard buttonConfig={DJBoardConfig(logSomething)} theme={boardTheme}/>
}
