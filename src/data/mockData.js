// src/data/mockData.js
// Fake data to fill the UI.
// In a real app, this would come from an API or database.

export const categories = [
  { id: 1, name: "Getting Started", icon: "🚀", count: 12 },
  { id: 2, name: "API Reference",   icon: "📡", count: 34 },
  { id: 3, name: "Tutorials",       icon: "📚", count: 28 },
  { id: 4, name: "Best Practices",  icon: "✅", count: 15 },
  { id: 5, name: "Troubleshooting", icon: "🔧", count: 9  },
];

export const articles = [
  {
    id: 1,
    title: "Introduction to the Platform",
    description: "Learn the basics of our platform and get started quickly with this comprehensive guide.",
    category: "Getting Started",
    author: "Admin",
    readTime: "5 min read",
    tags: ["beginner", "overview"],
  },
  {
    id: 2,
    title: "Authentication & Authorization",
    description: "Understand how to securely authenticate users and manage permissions in your application.",
    category: "API Reference",
    author: "Dev Team",
    readTime: "8 min read",
    tags: ["security", "api"],
  },
  {
    id: 3,
    title: "Building Your First Integration",
    description: "A step-by-step tutorial to connect your app with our services and start building.",
    category: "Tutorials",
    author: "Support",
    readTime: "12 min read",
    tags: ["tutorial", "integration"],
  },
  {
    id: 4,
    title: "Performance Optimization Tips",
    description: "Discover proven techniques to make your application faster and more efficient.",
    category: "Best Practices",
    author: "Engineering",
    readTime: "6 min read",
    tags: ["performance", "tips"],
  },
  {
    id: 5,
    title: "Handling API Rate Limits",
    description: "Learn how to gracefully handle rate limits and implement retry logic in your code.",
    category: "Troubleshooting",
    author: "Dev Team",
    readTime: "4 min read",
    tags: ["api", "errors"],
  },
  {
    id: 6,
    title: "Webhooks Configuration Guide",
    description: "Set up webhooks to receive real-time notifications for events in your system.",
    category: "API Reference",
    author: "Admin",
    readTime: "7 min read",
    tags: ["webhooks", "real-time"],
  },
];