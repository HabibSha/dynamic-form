import { useState } from "react";

const CalculateNumbers = () => {
  const [inputState, setInputState] = useState({ a: 0, b: 0 });
  const [result, setResult] = useState(0);

  const handleChange = (e) => {
    setInputState({
      ...inputState,
      [e.target.name]: parseFloat(e.target.value),
    });
  };

  const clearFunc = () => {
    setInputState({
      a: 0,
      b: 0,
    });
  };

  const mathematicsFunc = (operators) => {
    const f = new Function(
      "operators",
      `return ${inputState.a} ${operators} ${inputState.b}`
    );
    setResult(f(operators));
    // setResult(eval(`${inputState.a} + ${operators} + ${inputState.b}`));
  };

  return (
    <>
      <h1>Calculate Numbers</h1>
      <div>
        <h3>Result: {result}</h3>
        <div>
          <input
            type="number"
            name="a"
            value={inputState.a}
            onChange={handleChange}
          />
          <input
            type="number"
            name="b"
            value={inputState.b}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <button onClick={() => mathematicsFunc("+")}>+</button>
          <button onClick={() => mathematicsFunc("-")}>-</button>
          <button onClick={() => mathematicsFunc("*")}>*</button>
          <button onClick={() => mathematicsFunc("/")}>/</button>
          <button onClick={clearFunc}>clear</button>
        </div>
      </div>
    </>
  );
};

export default CalculateNumbers;
