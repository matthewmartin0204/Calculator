import { ButtonConfig } from '../Components/ButtonBoard/ButtonBoard.interface';

export const calcButtonConfig = (callback: Function): ButtonConfig[] => {
  return [
    {
      callback: callback,
      value: 'C',
      theme: {
        backgroundColor: '#444444'
      }
    },
    {
      callback: callback,
      value: '+/-',
      theme: {
        backgroundColor: '#444444'
      }
    },
    {
      callback: callback,
      value: '%',
      theme: {
        backgroundColor: '#444444'
      }
    },
    {
      callback: callback,
      value: '/'
    },
    {
      callback: callback,
      value: '7',
      theme: {
        backgroundColor: '#333333'
      }
    },
    {
      callback: callback,
      value: '8',
      theme: {
        backgroundColor: '#333333'
      }
    },
    {
      callback: callback,
      value: '9',
      theme: {
        backgroundColor: '#333333'
      }
    },
    {
      callback: callback,
      value: '*'
    },
    {
      callback: callback,
      value: '4',
      theme: {
        backgroundColor: '#333333'
      }
    },
    {
      callback: callback,
      value: '5',
      theme: {
        backgroundColor: '#333333'
      }
    },
    {
      callback: callback,
      value: '6',
      theme: {
        backgroundColor: '#333333'
      }
    },
    {
      callback: callback,
      value: '-'
    },
    {
      callback: callback,
      value: '1',
      theme: {
        backgroundColor: '#333333'
      }
    },
    {
      callback: callback,
      value: '2',
      theme: {
        backgroundColor: '#333333'
      }
    },
    {
      callback: callback,
      value: '3',
      theme: {
        backgroundColor: '#333333'
      }
    },
    {
      callback: callback,
      value: '+'
    },
    {
      callback: callback,
      value: '0',
      theme: {
        gridColumnSpan: 2,
        backgroundColor: '#333333'
      }
    },
    {
      callback: callback,
      value: '.',
      theme: {
        backgroundColor: '#333333'
      }
    },
    {
      callback: callback,
      value: '='
    }
  ];
};
