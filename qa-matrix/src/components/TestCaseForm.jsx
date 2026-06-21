import { useState } from "react";

function TestCaseForm({ addTestCase }) {
    const [title, setTitle] = useState("");
    const [steps, setSteps] = useState("");
    const [expected, setExpected] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTestCase = {
            title,
            steps,
            expected,
            status: "Not Run",
        };

        addTestCase(newTestCase);

        setTitle("");
        setSteps("");
        setExpected("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Test Case</h2>

            <input
                type="text"
                placeholder="Test Case Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <br />
            <br />

            <textarea
                placeholder="Steps to Reproduce"
                value={steps}
                onChange={(e) => setSteps(e.target.value)}
            />

            <br />
            <br />

            <textarea
                placeholder="Expected Result"
                value={expected}
                onChange={(e) => setExpected(e.target.value)}
            />

            <br />
            <br />

            <button type="submit">Add Test Case</button>
        </form>
    );
}

export default TestCaseForm;