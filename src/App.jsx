import { useState } from "react";
import "./App.css";

const CalculatorPage = () => {
  const [selection1, setSelection1] = useState(false); // True/False dropdown
  const [checkboxValues, setCheckboxValues] = useState([]); // Array to hold selected checkbox values
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  const [value4, setValue4] = useState(0);
  const [value5, setValue5] = useState(0);
  const [value6, setValue6] = useState(0);
  const [value7, setValue7] = useState(0);
  const [value8, setValue8] = useState(0);
  const [result, setResult] = useState(null);

  const numbers = Array.from({ length: 10 }, (_, i) => i); // Array [0, 1, 2, ..., 9]

  // Handles checkbox toggling
  const handleCheckboxChange = (number) => {
    setCheckboxValues((prev) =>
      prev.includes(number)
        ? prev.filter((n) => n !== number) // Remove if unchecked
        : [...prev, number] // Add if checked
    );
  };

  const handleCalculate = () => {
    // Sum the selected checkbox values
    const checkboxSum = checkboxValues.reduce((acc, num) => acc + num, 0);

    // Final calculation
    setResult(
      (selection1 ? checkboxSum : 1) *
        value2 *
        value3 *
        value4 *
        value5 *
        value6 *
        value7 *
        value8
    );
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Calculator</h1>

      {/* Selection 1: True/False Dropdown */}
      <div style={{ marginBottom: "10px" }}>
        <label>
          Selection 1 (True/False):
          <select
            value={selection1}
            onChange={(e) => setSelection1(e.target.value === "true")}
            style={{ marginLeft: "10px", padding: "5px" }}
          >
            <option value="false">False</option>
            <option value="true">True</option>
          </select>
        </label>
      </div>

      {/* Checkboxes that appear if Selection 1 is True */}
      {selection1 && (
        <div style={{ marginBottom: "10px" }}>
          <p>Select Numbers:</p>
          {[1, 2, 3].map((num) => (
            <label key={num} style={{ marginRight: "10px" }}>
              <input
                type="checkbox"
                value={num}
                checked={checkboxValues.includes(num)}
                onChange={() => handleCheckboxChange(num)}
                style={{ marginRight: "5px" }}
              />
              {num}
            </label>
          ))}
        </div>
      )}

      {/* Additional Dropdowns */}
      {[value2, value3, value4, value5, value6, value7, value8].map(
        (value, index) => (
          <div style={{ marginBottom: "10px" }} key={index}>
            <label>
              Select Number {index + 2}:
              <select
                value={value}
                onChange={(e) => {
                  const setters = [
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

      {/* Calculate Button */}
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

      {/* Result Display */}
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



