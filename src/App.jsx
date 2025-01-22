import { useState } from "react";
import "./App.css";

const CalculatorPage = () => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  const [value4, setValue4] = useState(0);
  const [value5, setValue5] = useState(0);
  const [value6, setValue6] = useState(0);
  const [value7, setValue7] = useState(0);
  const [value8, setValue8] = useState(0);
  const [result, setResult] = useState(null);

  const numbers = Array.from({ length: 10 }, (_, i) => i); // Array [0, 1, 2, ..., 9]

  const handleCalculate = () => {
    setResult(
      value1 * value2 * value3 * value4 * value5 * value6 * value7 * value8
    );
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Calculator</h1>
      {[value1, value2, value3, value4, value5, value6, value7, value8].map(
        (value, index) => (
          <div style={{ marginBottom: "10px" }} key={index}>
            <label>
              Select Number {index + 1}:
              <select
                value={value}
                onChange={(e) => {
                  const setters = [
                    setValue1,
                    setValue2,
                    setValue3,
                    setValue4,
                    setValue5,
                    setValue6,
                    setValue7,
                    setValue8,
                  ];
                  setters[index](Number(e.target.value));
                }}
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
        )
      )}

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


