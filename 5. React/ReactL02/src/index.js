import React from 'react';
import ReactDOM from 'react-dom';

const groceryList = (
    <ul>
      <li>Apples</li>
      <li>Oranges</li>
      <li>Mangos</li>
    </ul>
);

ReactDOM.render(
  groceryList,
  document.getElementById('root')
);