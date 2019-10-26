import React from 'react';

const Counter = ({ count, clicks, onDecrement, onIncrement, onInputValueChange, valueInput, onInputValue }) => {

    return (
      <div>
        <div>
          <button onClick={onDecrement}>-</button>
          <span>[<u>{count}</u>]</span>
          <button onClick={onIncrement}>+</button>
          <br />
          <span>Increase or Decressed button clicks: [{clicks}]</span>
          <br />
          <input type="text" onChange={event => onInputValueChange(event.target.value)}  value={valueInput}/>
          <button onClick={onInputValue}>Change Value</button>
        </div>
      </div>
    );
}


export default Counter;