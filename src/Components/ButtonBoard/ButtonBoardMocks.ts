import { ButtonConfig } from './ButtonBoard.interface';

export const ButtonConfigMock: ButtonConfig = {
  callback: () => {
    console.log('sup');
  },
  value: 'omg hi'
};

export const ButtonConfigArrayMock: ButtonConfig[] = [
  {
    callback: () => {
      console.log('sup');
    },
    value: 'omg hi'
  },
  {
    callback: () => {
      console.log('sup');
    },
    value: 'omg hi',
    theme: {
      gridColumnSpan: 1,
      gridRowSpan: 2
    }
  },
  {
    callback: () => {
      console.log('sup');
    },
    value: 'omg hi',
    theme: {
      gridColumnSpan: 2,
      gridRowSpan: 2
    }
  },
  {
    callback: () => {
      console.log('sup');
    },
    value: 'omg hi',
    theme: {
      gridColumnSpan: 1,
      gridRowSpan: 2
    }
  },
  {
    callback: () => {
      console.log('sup');
    },
    value: 'omg hi',
    theme: {
      gridColumnSpan: 2,
      gridRowSpan: 1
    }
  },
];
