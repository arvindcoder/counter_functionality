import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [customAmount, setCustomAmount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const handleAddAmount = () => {
    setCount((prevCount) => prevCount + parseInt(customAmount, 10));
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
  };

  const handleConditionalIncrease = () => {
    if (count % 2 !== 0) {
      setCount((prevCount) => prevCount + parseInt(customAmount, 10));
    }
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>

      <div>
        <input
          type="number"
          value={customAmount}
          onChange={handleCustomAmountChange}
        />
        <button onClick={handleAddAmount}>Add Amount</button>
      </div>

      <button onClick={handleConditionalIncrease}>
        Conditional Increase
      </button>
    </div>
  );
};

export default Counter;
