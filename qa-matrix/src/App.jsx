import { useState } from "react";
import TestCaseForm from "./components/TestCaseForm";

function App() {
  const [testCases, setTestCases] = useState([]);

  const addTestCase = (newTestCase) => {
    setTestCases([...testCases, newTestCase]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>QA Matrix</h1>

      <TestCaseForm addTestCase={addTestCase} />

      <hr />

      <h2>Test Cases</h2>

      {testCases.map((testCase, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>{testCase.title}</h3>

          <p>
            <strong>Steps:</strong> {testCase.steps}
          </p>

          <p>
            <strong>Expected:</strong> {testCase.expected}
          </p>

          <p>
            <strong>Status:</strong> {testCase.status}
          </p>

          <button
            onClick={() => {
              const updated = [...testCases];
              updated[index].status = "Pass";
              setTestCases(updated);
            }}
          >
            Pass
          </button>

          <button
            onClick={() => {
              const updated = [...testCases];
              updated[index].status = "Fail";
              setTestCases(updated);
            }}
            style={{ marginLeft: "10px" }}
          >
            Fail
          </button>

          <button
            onClick={() => {
              const updated = [...testCases];
              updated[index].status = "Not Run";
              setTestCases(updated);
            }}
            style={{ marginLeft: "10px" }}
          >
            Reset
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;