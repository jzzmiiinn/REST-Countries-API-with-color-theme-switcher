import { useTheme } from "../context/ThemeContext";

export const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="flex items-center justify-between bg-white px-6 py-6 text-gray-900 shadow-sm dark:bg-gray-800 dark:text-white">
      <h1 className="text-xl font-extrabold">Where in the world?</h1>

      <button
        type="button"
        onClick={toggleTheme}
        className="text-sm font-semibold"
      >
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>
    </header>
  );
};
