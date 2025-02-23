import React, { useState } from "react";

const CaseDetailsForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        caseTitle: "",
        caseDescription: "",
        caseDate: "",
        caseType: "Civil", // Default case type
    });

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-blue-600 mb-4">📝 Case Submission Form</h2>

            {/* Full Name */}
            <div className="mb-4">
                <label className="block text-gray-700 font-semibold">Full Name</label>
                <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded"
                    placeholder="Enter your full name"
                />
            </div>

            {/* Email */}
            <div className="mb-4">
                <label className="block text-gray-700 font-semibold">Email Address</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded"
                    placeholder="Enter your email"
                />
            </div>

            {/* Case Title */}
            <div className="mb-4">
                <label className="block text-gray-700 font-semibold">Case Title</label>
                <input
                    type="text"
                    name="caseTitle"
                    value={formData.caseTitle}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded"
                    placeholder="Brief title of the case"
                />
            </div>

            {/* Case Description */}
            <div className="mb-4">
                <label className="block text-gray-700 font-semibold">Case Description</label>
                <textarea
                    name="caseDescription"
                    value={formData.caseDescription}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded"
                    rows="4"
                    placeholder="Describe the case in detail"
                ></textarea>
            </div>

            {/* Case Date */}
            <div className="mb-4">
                <label className="block text-gray-700 font-semibold">Case Date</label>
                <input
                    type="date"
                    name="caseDate"
                    value={formData.caseDate}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded"
                />
            </div>

            {/* Case Type Dropdown */}
            <div className="mb-4">
                <label className="block text-gray-700 font-semibold">Case Type</label>
                <select
                    name="caseType"
                    value={formData.caseType}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                >
                    <option value="Civil">Civil</option>
                    <option value="Criminal">Criminal</option>
                    <option value="Corporate">Corporate</option>
                    <option value="Family">Family</option>
                    <option value="Labor">Labor</option>
                </select>
            </div>

            {/* Submit Button */}
            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700">
                Submit Case
            </button>
        </form>
    );
};

export default CaseDetailsForm;
