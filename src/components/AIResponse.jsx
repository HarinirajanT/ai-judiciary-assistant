import React from "react";

const AIResponse = ({ response }) => {
    return (
        <div className="p-4 bg-gray-100 mt-4">
            <h2 className="text-lg font-semibold">AI Legal Suggestion:</h2>
            <p>{response || "Submit a case to get AI guidance"}</p>
        </div>
    );
};

export default AIResponse;
