// src/App.jsx
// Root component — manages ALL state and renders the full page layout.
// "State" = data that can change (articles list, modal open/closed, etc.)

import { useState } from "react";
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import ArticleCard from "./components/ui/ArticleCard";
import Modal from "./components/ui/Modal";
import { articles as initialArticles } from "./data/mockData";

function App() {
  // ── STATE VARIABLES ──────────────────────────────────────
  // React re-renders the UI automatically whenever these change

  const [articles, setArticles] = useState(initialArticles);
  // articles = the current list of articles to display
  // setArticles = function to update the list

  const [isModalOpen, setIsModalOpen] = useState(false);
  // false = modal is closed by default

  const [activeCategory, setActiveCategory] = useState("All");
  // "All" = show all categories by default

  const [searchQuery, setSearchQuery] = useState("");
  // "" = no search text by default

  // ── FILTERED ARTICLES ────────────────────────────────────
  // This recalculates every time articles, activeCategory or searchQuery changes
  const filteredArticles = articles.filter((article) => {
    const matchesCategory =
      activeCategory === "All" || article.category === activeCategory;

    const matchesSearch =
      searchQuery === "" ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  // ── HANDLERS ─────────────────────────────────────────────

  // Called when user submits the Create New form
  const handleCreateArticle = (formData) => {
    const newArticle = {
      id: articles.length + 1,
      title: formData.title,
      description: formData.description || "No description provided.",
      category: formData.category,
      author: "You",
      readTime: "1 min read",
      tags: ["new"],
    };
    // Add new article to the BEGINNING of the list
    setArticles([newArticle, ...articles]);
  };

  // ── RENDER ───────────────────────────────────────────────
  return (
    <div className="flex min-h-screen bg-gray-50">

      {/* Sidebar — fixed on the left, 256px wide */}
      <Sidebar
        activeCategory={activeCategory}
        onCategoryClick={(cat) => setActiveCategory(cat)}
      />

      {/* Main content area — shifted right by sidebar width (ml-64) */}
      <div className="ml-64 flex-1 flex flex-col min-h-screen">

        {/* Sticky top header */}
        <Header
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onCreateNew={() => setIsModalOpen(true)}
        />

        {/* Page content */}
        <main className="p-6 flex-1">

          {/* Results info bar */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                {activeCategory === "All" ? "All Articles" : activeCategory}
              </h2>
              <p className="text-sm text-gray-500">
                {filteredArticles.length} article
                {filteredArticles.length !== 1 ? "s" : ""} found
              </p>
            </div>
            {/* Show "Clear filter" only when a category is active */}
            {activeCategory !== "All" && (
              <button
                onClick={() => setActiveCategory("All")}
                className="text-sm text-[#4F46E5] hover:underline"
              >
                Clear filter ✕
              </button>
            )}
          </div>

          {/* Article grid — 1 col on mobile, 2 on tablet, 3 on desktop */}
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            // Empty state when no articles match
            <div className="flex flex-col items-center justify-center
                            py-20 text-center">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                No articles found
              </h3>
              <p className="text-gray-500 text-sm mb-4">
                Try adjusting your search or filter.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="text-[#4F46E5] font-medium hover:underline"
              >
                + Create New Article
              </button>
            </div>
          )}
        </main>
      </div>

      {/* Modal — renders on top of everything when isModalOpen is true */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCreateArticle}
      />

    </div>
  );
}

export default App;