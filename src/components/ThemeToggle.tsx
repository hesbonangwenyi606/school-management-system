import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full border border-gray-300 dark:border-gray-700 
                 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 
                 transition flex items-center justify-center"
    >
      {theme === "light" ? (
        <Moon size={18} className="text-gray-700" />
      ) : (
        <Sun size={20} className="text-yellow-400" />
      )}
    </button>
  );
};
