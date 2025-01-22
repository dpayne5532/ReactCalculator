import { useState } from 'react'
import './App.css'


const CalculatorPage = () => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  const [result, setResult] = useState(null);

  const numbers = Array.from({ length: 10 }, (_, i) => i); // Array [0, 1, 2, ..., 9]

  const handleCalculate = () => {
    setResult(value1 * value2 * value3);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Calculator</h1>
      <div style={{ marginBottom: "10px" }}>
        <label>
          Select Number 1:
          <select
            value={value1}
            onChange={(e) => setValue1(Number(e.target.value))}
            style={{ marginLeft: "10px", padding: "5px" }}
          >
            {numbers.map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>
          Select Number 2:
          <select
            value={value2}
            onChange={(e) => setValue2(Number(e.target.value))}
            style={{ marginLeft: "10px", padding: "5px" }}
          >
            {numbers.map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>
          Select Number 3:
          <select
            value={value3}
            onChange={(e) => setValue3(Number(e.target.value))}
            style={{ marginLeft: "10px", padding: "5px" }}
          >
            {numbers.map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </label>
      </div>

      <button
        onClick={handleCalculate}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Calculate
      </button>

      {result !== null && (
        <div style={{ marginTop: "20px", fontSize: "18px" }}>
          <strong>Result:</strong> {result}
        </div>
      )}
    </div>
  );
};

export default function App() {
  return (
    <div>
      <CalculatorPage />
    </div>
  );
}

