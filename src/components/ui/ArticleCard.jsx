// src/components/ui/ArticleCard.jsx
// Displays one article as a card.
// Receives article data via "props" — data passed from the parent component.

function ArticleCard({ article }) {
  // Destructure the article object into individual variables
  const { title, description, category, author, readTime, tags } = article;

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5
                    hover:shadow-md hover:border-[#4F46E5]
                    transition-all duration-200 cursor-pointer group">

      {/* Category badge at the top */}
      <span className="inline-block bg-indigo-100 text-[#4F46E5]
                       text-xs font-semibold px-2.5 py-1 rounded-full mb-3">
        {category}
      </span>

      {/* Article title — changes color on hover */}
      <h3 className="text-gray-900 font-semibold text-base mb-2 leading-snug
                     group-hover:text-[#4F46E5] transition-colors">
        {title}
      </h3>

      {/* Description — line-clamp-2 limits to 2 lines */}
      <p className="text-gray-500 text-sm mb-4 leading-relaxed line-clamp-2">
        {description}
      </p>

      {/* Tags row */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {tags.map((tag) => (
          <span key={tag}
                className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
            #{tag}
          </span>
        ))}
      </div>

      {/* Footer: author and read time */}
      <div className="flex items-center justify-between text-xs text-gray-400
                      pt-3 border-t border-gray-100">
        <span>By {author}</span>
        <span>{readTime}</span>
      </div>
    </div>
  );
}

export default ArticleCard;