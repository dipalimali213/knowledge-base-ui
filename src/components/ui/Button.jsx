// src/components/ui/Button.jsx
// A reusable button component.
// Usage: <Button variant="primary" onClick={myFunction}>Click Me</Button>

function Button({ children, onClick, variant = "primary", type = "button" }) {
  // Each variant has a different Tailwind class string
  const styles = {
    primary:
      "bg-[#4F46E5] hover:bg-indigo-700 text-white font-semibold " +
      "px-4 py-2 rounded-lg transition-colors duration-200 cursor-pointer",
    secondary:
      "border border-[#4F46E5] text-[#4F46E5] hover:bg-indigo-50 " +
      "font-semibold px-4 py-2 rounded-lg transition-colors duration-200 cursor-pointer",
    ghost:
      "text-gray-600 hover:text-[#4F46E5] hover:bg-gray-100 " +
      "px-3 py-2 rounded-lg transition-colors duration-200 cursor-pointer",
  };

  return (
    <button type={type} onClick={onClick} className={styles[variant]}>
      {children}
    </button>
  );
}

export default Button;