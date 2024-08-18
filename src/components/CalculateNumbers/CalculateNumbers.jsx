import { useState } from "react";

const generateId = () => {
  return Math.round(Math.random() * 19969) + 1;
};

const CalculateNumbers = () => {
  const [inputState, setInputState] = useState({ a: 0, b: 0 });
  const [result, setResult] = useState(0);
  const [histories, setHistories] = useState([]);
  const [restoredHistory, setRestoredHistory] = useState(null);

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
    if (inputState.a === 0 && inputState.b === 0) {
      alert("Input without value");
      return;
    }

    const f = new Function(
      "operators",
      `return ${inputState.a} ${operators} ${inputState.b}`
    );

    const result = f(operators);
    setResult(result);

    // setResult(eval(`${inputState.a} + ${operators} + ${inputState.b}`));

    const history = {
      id: generateId(),
      inputs: inputState,
      operators,
      result,
      date: new Date(),
    };
    setHistories([history, ...histories]);
  };

  const handleRestoreBtn = (historyItem) => {
    setInputState({ ...historyItem.inputs });
    setResult(historyItem.result);
    // if i want to disable button after click the restore button
    setRestoredHistory(historyItem.id);
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
        {histories.length > 0 ? (
          <ul>
            {histories.map((item) => (
              <li key={item.id}>
                <p>
                  Sum: {item.inputs.a} {item.operators} {item.inputs.b}, Result:{" "}
                  {item.result}
                </p>
                <small>Date: {item.date.toLocaleDateString()}</small>
                <br />
                <button
                  onClick={() => handleRestoreBtn(item)}
                  disabled={
                    restoredHistory !== null && restoredHistory === item.id
                  }
                  // restoredHistory is an id.
                >
                  restore
                </button>
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
