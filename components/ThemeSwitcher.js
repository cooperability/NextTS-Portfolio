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
        <button onClick={() => setTheme("light")}>Light Mode</button>
      ) : (
        <button onClick={() => setTheme("dark")}>Dark Mode</button>
      )}
    </div>
  );
};

export default ThemeSwitcher;
