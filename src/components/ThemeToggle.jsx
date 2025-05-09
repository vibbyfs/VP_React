
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "../lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  });

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
    window.dispatchEvent(new Event("themeChange"));
  };

  return (
    <>
    <div className="relative">
    <span className="absolute left-100 top-90 transform -translate-y-1/2 z-40 text-sm">Click If you want see Sun/Moon ➡️</span>
    <button
      onClick={toggleTheme}
      className={cn(
        "absolute left-1/2 top-90 transform -translate-x-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white dark:bg-black shadow-md ransition-colors duration-300"
           
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6  text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
    </div>
    </>
  );
};
