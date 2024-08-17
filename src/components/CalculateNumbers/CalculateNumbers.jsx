import { useState } from "react";

const generateId = () => {
  return Math.round(Math.random() * 19969) + 1;
};

const CalculateNumbers = () => {
  const [inputState, setInputState] = useState({ a: 0, b: 0 });
  const [result, setResult] = useState(0);
  const [history, setHistory] = useState([]);

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
    setResult(0);
  };

  const mathematicsFunc = (operators) => {
    const f = new Function(
      "operators",
      `return ${inputState.a} ${operators} ${inputState.b}`
    );

    if (inputState.a === 0 && inputState.b === 0) {
      console.log("Input without value");
    } else {
      setResult(f(operators));
    }
    // setResult(eval(`${inputState.a} + ${operators} + ${inputState.b}`));

    const sum = `${inputState.a} ${operators} ${inputState.b}`;
    const historyBody = {
      id: generateId(),
      sum,
      result: f(operators),
    };

    setHistory([...history, historyBody]);
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
          <button onClick={() => mathematicsFunc("%")}>%</button>
          <button onClick={clearFunc}>clear</button>
        </div>
        <br />
        {history.length > 0 ? (
          <ul>
            {history.map((item) => (
              <li key={item.id}>
                <p>Sum: {item.sum}</p>
                <p>Result: {item.result}</p>
              </li>
            ))}
          </ul>
        ) : (
          <small>There is no history</small>
        )}
      </div>
    </>
  );
};

export default CalculateNumbers;
