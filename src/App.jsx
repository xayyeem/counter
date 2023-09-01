// src/Counter.js
import React, { useState } from 'react';
import './App.css';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter-container">
      <h1 className="counter-text">Counter App</h1>
      <p className="counter-text">Count: {count}</p>
      <div className="counter-buttons">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement} disabled={count === 0}>Decrement</button>
      </div>
    </div>
  );
}

export default Counter;
