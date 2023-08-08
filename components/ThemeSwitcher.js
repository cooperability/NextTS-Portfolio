"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme("dark");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      {theme == "dark" ? (
        <button
          class="bg-slate-100 hover:bg-slate-300 text-black font-bold py-2 px-4 rounded"
          onClick={() => setTheme("light")}
        >
          Light Mode
        </button>
      ) : (
        <button
          class="bg-slate-800 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded"
          onClick={() => setTheme("dark")}
        >
          Dark Mode
        </button>
      )}
    </div>
  );
};

export default ThemeSwitcher;
