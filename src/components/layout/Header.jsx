// src/components/layout/Header.jsx
// Top bar: page title, search input, and the "Create New" button.
// The Create New button calls onCreateNew from App.jsx to open the modal.

import Button from "../ui/Button";

function Header({ searchQuery, onSearchChange, onCreateNew }) {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4
                       flex items-center justify-between sticky top-0 z-10">

      {/* Page title */}
      <div>
        <h1 className="text-xl font-bold text-[#1E1B4B]">Knowledge Base</h1>
        <p className="text-gray-500 text-sm">Find answers and documentation</p>
      </div>

      {/* Right side: search + button */}
      <div className="flex items-center gap-4">

        {/* Search box */}
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2
                           text-gray-400 text-sm">
            🔍
          </span>
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm
                       focus:outline-none focus:ring-2 focus:ring-[#4F46E5]
                       focus:border-transparent w-64"
          />
        </div>

        {/* This button opens the modal — it is clickable as required */}
        <Button variant="primary" onClick={onCreateNew}>
          + Create New
        </Button>

      </div>
    </header>
  );
}

export default Header;