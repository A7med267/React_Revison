import "./App.css";
import { useState, useReducer } from "react";
import  resultReducer  from './reducer/reduceRes'

function App() {
  const [firstNumberInput, setFirstNumberInput] = useState("");
  const [secondNumberInput, setSecondNumberInput] = useState("");

  const [result2, dispatch] = useReducer(resultReducer, null);

  // SUM
  function handleSumClick() {
    dispatch({
      type: "Added",
      payload: {
        firstNumberInput: firstNumberInput,
        secondNumberInput: secondNumberInput,
      },
    });
  }

  // SUBTRACT
  function handleSubClick() {
    dispatch({
      type: "subtracted",
      payload: {
        firstNumberInput: firstNumberInput,
        secondNumberInput: secondNumberInput,
      },
    });
  }

  // MULTIPLY
  function handleMultClick() {
    dispatch({
      type: "multiplied",
      payload: {
        firstNumberInput: firstNumberInput,
        secondNumberInput: secondNumberInput,
      },
    });
  }

  // DIVIDE
  function handleDivClick() {
    dispatch({
      type: "divided",
      payload: {
        firstNumberInput: firstNumberInput,
        secondNumberInput: secondNumberInput,
      },
    });
  }

  return (
    <div className="App">
      <div className="calculator">
        <h1>Calculator</h1>

        <label>First Number</label>

        <input
          type="number"
          value={firstNumberInput}
          onChange={(e) => setFirstNumberInput(e.target.value)}
        />

        <label>Second Number</label>

        <input
          type="number"
          value={secondNumberInput}
          onChange={(e) => setSecondNumberInput(e.target.value)}
        />

        <div className="buttons">
          <button onClick={handleSumClick}>Sum</button>

          <button onClick={handleSubClick}>Subtract</button>

          <button onClick={handleMultClick}>Multiply</button>

          <button onClick={handleDivClick}>Divide</button>
        </div>

        <hr />

        <div className="result">
          <h2>{result2}</h2>
        </div>
      </div>
    </div>
  );
}

export default App;

