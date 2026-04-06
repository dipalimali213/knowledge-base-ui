// src/components/layout/Sidebar.jsx
// The left navigation panel.
// Receives activeCategory and onCategoryClick from App.jsx via props.

import { categories } from "../../data/mockData";

function Sidebar({ activeCategory, onCategoryClick }) {
  // Static nav links — non-clickable as per assignment requirements
  const navLinks = [
    { icon: "🏠", label: "Home" },
    { icon: "📄", label: "All Articles" },
    { icon: "⭐", label: "Favorites" },
    { icon: "🕘", label: "Recently Viewed" },
  ];

  return (
    <aside className="w-64 bg-[#1E1B4B] h-screen fixed left-0 top-0
                      flex flex-col z-20">

      {/* Logo area */}
      <div className="p-6 border-b border-indigo-700">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#4F46E5] rounded-lg flex items-center
                          justify-center text-white font-bold text-sm">
            KB
          </div>
          <span className="text-white font-bold text-lg">KnowledgeBase</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 overflow-y-auto">

        {/* Static nav links */}
        <div className="mb-6">
          <p className="text-indigo-400 text-xs font-semibold uppercase
                        tracking-wider px-3 mb-2">
            Navigation
          </p>
          {navLinks.map((link) => (
            <button
              key={link.label}
              className="w-full flex items-center gap-3 text-indigo-200
                         hover:text-white hover:bg-indigo-700 px-3 py-2.5
                         rounded-lg text-sm font-medium transition-colors text-left"
            >
              <span>{link.icon}</span>
              <span>{link.label}</span>
            </button>
          ))}
        </div>

        {/* Clickable category filters */}
        <div>
          <p className="text-indigo-400 text-xs font-semibold uppercase
                        tracking-wider px-3 mb-2">
            Categories
          </p>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onCategoryClick(cat.name)}
              className={`w-full flex items-center justify-between px-3 py-2.5
                          rounded-lg text-sm font-medium transition-colors text-left
                          ${activeCategory === cat.name
                            ? "bg-[#4F46E5] text-white"
                            : "text-indigo-200 hover:text-white hover:bg-indigo-700"
                          }`}
            >
              <span className="flex items-center gap-2.5">
                <span>{cat.icon}</span>
                <span>{cat.name}</span>
              </span>
              {/* Count badge */}
              <span className={`text-xs px-2 py-0.5 rounded-full
                ${activeCategory === cat.name
                  ? "bg-white text-[#4F46E5]"
                  : "bg-indigo-700 text-indigo-300"}`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>
      </nav>

      {/* User profile at bottom */}
      <div className="p-4 border-t border-indigo-700">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#4F46E5] rounded-full flex items-center
                          justify-center text-white text-sm font-bold">
            U
          </div>
          <div>
            <p className="text-white text-sm font-medium">User Name</p>
            <p className="text-indigo-400 text-xs">user@email.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;