import { useState } from "react";
import "./App.css";

const CalculatorPage = () => {
  const initialState = [
    { isTrue: false, selectedValues: [] }, // Selection 1
    { isTrue: false, selectedValues: [] }, // Selection 2
    { isTrue: false, selectedValues: [] }, // Selection 3
    { isTrue: false, selectedValues: [] }, // Selection 4
    { isTrue: false, selectedValues: [] }, // Selection 5
    { isTrue: false, selectedValues: [] }, // Selection 6
    { isTrue: false, selectedValues: [] }, // Selection 7
    { isTrue: false, selectedValues: [] }, // Selection 8
  ];

  const [selections, setSelections] = useState(initialState);
  const [result, setResult] = useState(null);

  const handleTrueFalseChange = (index, value) => {
    const updatedSelections = [...selections];
    updatedSelections[index].isTrue = value;
    updatedSelections[index].selectedValues = value ? updatedSelections[index].selectedValues : [];
    setSelections(updatedSelections);
  };

  const handleCheckboxChange = (index, number) => {
    const updatedSelections = [...selections];
    const selectedValues = updatedSelections[index].selectedValues;

    // Toggle the checkbox value
    if (selectedValues.includes(number)) {
      updatedSelections[index].selectedValues = selectedValues.filter((n) => n !== number);
    } else {
      updatedSelections[index].selectedValues = [...selectedValues, number];
    }
    setSelections(updatedSelections);
  };

  const handleCalculate = () => {
    const totalProduct = selections.reduce((product, selection) => {
      const sumOfCheckboxes = selection.selectedValues.reduce((sum, num) => sum + num, 0);
      return product * (selection.isTrue ? sumOfCheckboxes || 1 : 1);
    }, 1);

    setResult(totalProduct);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Advanced Calculator</h1>

      {/* Render dropdowns and checkboxes dynamically */}
      {selections.map((selection, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <label>
            Selection {index + 1}:
            <select
              value={selection.isTrue}
              onChange={(e) => handleTrueFalseChange(index, e.target.value === "true")}
              style={{ marginLeft: "10px", padding: "5px" }}
            >
              <option value="false">False</option>
              <option value="true">True</option>
            </select>
          </label>

          {/* Checkboxes that appear if True */}
          {selection.isTrue && (
            <div style={{ marginTop: "10px", display: "flex", flexDirection: "column" }}>

              {[1, 2, 3].map((num) => (
                <label key={num} style={{ marginBottom: "5px" }}>
                  <input
                    type="checkbox"
                    value={num}
                    checked={selection.selectedValues.includes(num)}
                    onChange={() => handleCheckboxChange(index, num)}
                    style={{ marginRight: "5px" }}
                  />
                  {num}
                </label>
              ))}
            </div>
          )}
        </div>
      ))}

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
