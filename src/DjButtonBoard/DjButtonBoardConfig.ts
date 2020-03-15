import {
  ButtonConfig,
  ButtonBoardStyle
} from '../Components/ButtonBoard/ButtonBoard.interface';

export const boardTheme: ButtonBoardStyle = {
  gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
  gridTemplateRows: '80px'
};

export const DJBoardConfig = (callback: Function): ButtonConfig[] => {
  return [
    {
      callback: callback,
      theme: {
        backgroundColor: '#444444'
      }
    },
    {
      callback: callback,
      theme: {
        backgroundColor: '#444444'
      }
    },
    {
      callback: callback,
      theme: {
        backgroundColor: '#444444'
      }
    },
    {
      callback: callback
    },
    {
      callback: callback,
      theme: {
        backgroundColor: '#333333'
      }
    },
    {
      callback: callback,
      theme: {
        backgroundColor: '#333333'
      }
    },
    {
      callback: callback,
      theme: {
        backgroundColor: '#333333'
      }
    },
    {
      callback: callback
    },
    {
      callback: callback,
    },
    {
      callback: callback,
      theme: {
        backgroundColor: '#333333'
      }
    },
    {
      callback: callback,
      theme: {
        backgroundColor: '#333333'
      }
    },
    {
      callback: callback
    },
    {
      callback: callback,
      theme: {
        backgroundColor: '#333333'
      }
    },
    {
      callback: callback,
      theme: {
        backgroundColor: '#333333'
      }
    },
    {
      callback: callback,
    },
    {
      callback: callback,
      theme: {
        backgroundColor: '#333333'
      }
    },
    {
      callback: callback,
      theme: {
        backgroundColor: '#eb4034',
        gridColumnSpan: 2,
        gridRowSpan: 2
      }
    },
    {
      callback: callback,
      theme: {
        gridColumnSpan: 2,
        backgroundColor: '#333333'
      }
    },
    {
      callback: callback,
      theme: {
        backgroundColor: '#8C1D40'
      }
    },
    {
      callback: callback,
      theme: {
        backgroundColor: '#8C1D40'
      }
    },
    {
      callback: callback
    },
    {
      callback: callback,
      theme: {
        backgroundColor: '#8C1D40'
      }
    },
    {
      callback: callback,
      theme: {
        gridColumnSpan: 2,
        backgroundColor: '#39ff14'
      }
    },
    {
      callback: callback,
      theme: {
        gridColumnSpan: 2,
        backgroundColor: '#39ff14',
      }
    },
    {
      callback: callback,
      theme: {
        gridColumnSpan: 2,
        backgroundColor: '#39ff14'
      }
    }
  ];
};
