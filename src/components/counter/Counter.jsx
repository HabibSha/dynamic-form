import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      <button onClick={handleIncrement}>Increment</button>
      <p>Count: {count}</p>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Counter;
