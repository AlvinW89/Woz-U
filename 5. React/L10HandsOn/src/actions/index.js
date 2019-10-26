export const increment = () => ({
  type: 'INCREMENT'
});

export const decrement = () => ({
  type: 'DECREMENT'
});

export const inputValue = () => ({
  type: 'INPUT_VALUE'
});

export const inputValueChange = (number) => ({
  type: 'INPUT_VALUE_CHANGE',
  number
});

