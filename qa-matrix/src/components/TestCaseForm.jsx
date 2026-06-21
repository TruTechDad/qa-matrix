function TestCaseForm() {
    return (
        <div>
            <h2>Add Test Case</h2>

            <input
                type="text"
                placeholder="Test Case Title"
            />

            <br /><br />

            <textarea
                placeholder="Steps to Reproduce"
            />

            <br /><br />

            <textarea
                placeholder="Expected Result"
            />

            <br /><br />

            <button>Add Test Case</button>
        </div>
    );
}

export default TestCaseForm;