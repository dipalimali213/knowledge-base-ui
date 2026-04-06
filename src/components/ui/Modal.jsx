// src/components/ui/Modal.jsx
// The popup that appears when user clicks "Create New".
// This is Screen 2 of the assignment.

import { useState } from "react";
import Button from "./Button";

function Modal({ isOpen, onClose, onSubmit }) {
  // useState stores the form field values in memory
  const [formData, setFormData] = useState({
    title: "",
    category: "Getting Started",
    description: "",
    content: "",
  });

  // Called every time the user types in any input field
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update only the field that changed, keep all others the same
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (!formData.title.trim()) {
      alert("Please enter an article title.");
      return;
    }
    onSubmit(formData);                         // Send data to App.jsx
    setFormData({ title: "", category: "Getting Started",
                  description: "", content: "" }); // Reset form
    onClose();                                  // Close the modal
  };

  // If modal is not open, render nothing at all
  if (!isOpen) return null;

  // Shared input class string — keeps code DRY
  const inputCls =
    "w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm " +
    "focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent";

  return (
    // OVERLAY — dark background. Clicking it closes the modal.
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center
                 justify-center z-50 p-4"
      onClick={onClose}
    >
      {/* MODAL BOX — stopPropagation prevents clicks inside from closing it */}
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-xl font-bold text-[#1E1B4B]">Create New Article</h2>
            <p className="text-sm text-gray-500 mt-0.5">Add to your knowledge base</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 hover:bg-gray-100
                       rounded-full w-8 h-8 flex items-center justify-center
                       transition-colors text-lg"
          >
            ✕
          </button>
        </div>

        {/* Form fields */}
        <div className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter article title..."
              className={inputCls}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Category</label>
            <select name="category" value={formData.category}
                    onChange={handleChange} className={inputCls}>
              <option>Getting Started</option>
              <option>API Reference</option>
              <option>Tutorials</option>
              <option>Best Practices</option>
              <option>Troubleshooting</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Description</label>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Brief summary of the article..."
              className={inputCls}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Content</label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              placeholder="Write your article content here..."
              rows={4}
              className={`${inputCls} resize-none`}
            />
          </div>
        </div>

        {/* Footer buttons */}
        <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-200">
          <Button variant="secondary" onClick={onClose}>Cancel</Button>
          <Button variant="primary" onClick={handleSubmit}>Create Article</Button>
        </div>
      </div>
    </div>
  );
}

export default Modal;