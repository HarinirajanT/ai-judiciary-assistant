import React, { useState } from "react";

const CaseForm = ({ onSubmit }) => {
    const [caseText, setCaseText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(caseText);
    };

    return (
        <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">Enter Your Case Details</h2>
            <textarea
                className="w-full border p-2"
                rows="4"
                placeholder="Describe your legal case..."
                value={caseText}
                onChange={(e) => setCaseText(e.target.value)}
            ></textarea>
            <button
                onClick={handleSubmit}
                className="bg-blue-600 text-white p-2 mt-2 rounded"
            >
                Submit
            </button>
        </div>
    );
};

export default CaseForm;
