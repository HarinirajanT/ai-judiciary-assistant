import React, { useState } from "react";
import "./CaseSubmission.css";

const CaseSubmission = () => {
    const [formData, setFormData] = useState({
        caseTitle: "",
        caseDescription: ""
    });
    const [response, setResponse] = useState({ classification: "", suggestions: "", summary: "" });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        
        try {
            const res = await fetch("http://localhost:5000/analyze-case", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            if (!res.ok) throw new Error("Failed to process case.");

            const data = await res.json();
            setResponse({
                classification: data.classification,
                suggestions: data.suggestions,
                summary: data.summary
            });
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="main-container"> {/* Centers everything */}
            <div className="case-container"> {/* The centered case container */}
                <h2>📌 AI Legal Assistant</h2>
                {error && <p className="error-message">⚠️ {error}</p>}
                
                <form onSubmit={handleSubmit} className="case-form">
                    <div className="form-group">
                        <label>Case Title:</label>
                        <input type="text" name="caseTitle" value={formData.caseTitle} onChange={handleChange} required />
                    </div>
                    
                    <div className="form-group">
                        <label>Case Description:</label>
                        <textarea name="caseDescription" value={formData.caseDescription} onChange={handleChange} required />
                    </div>
                    
                    <button type="submit" disabled={loading}>{loading ? "Processing..." : "Submit Case"}</button>
                </form>
                
                {response.classification && (
                    <div className="response-section">
                        <div className="response-box">
                            <h3>📌 Case Classification</h3>
                            <p>{response.classification}</p>
                        </div>
                        <div className="response-box">
                            <h3>💡 AI Suggestions</h3>
                            <p>{response.suggestions}</p>
                        </div>
                        <div className="response-box">
                            <h3>📄 Case Summary</h3>
                            <p>{response.summary}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CaseSubmission;
