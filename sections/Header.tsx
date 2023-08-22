"use client";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";
import { useState, useEffect } from "react";
import styles from "../styles/utils.module.css";
import Link from 'next/link';

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <button
          className="bg-slate-100 hover:bg-slate-300 text-black font-bold py-1 px-1 rounded flex"
          onClick={() => setTheme("light")}
        >
          <SunIcon
            className="w-7 h-7 text-yellow-500 "
            role="button"
          />
          Light
        </button>
      );
    } else {
      return (
        <button
          className="bg-slate-600 hover:bg-slate-800 text-white font-bold py-1 px-1 rounded flex"
          onClick={() => setTheme("dark")}
        >
          <MoonIcon
            className="w-7 h-7 text-gray-900 "
            role="button"
          />
          Dark
        </button>
      );
    }
  };

  return (
    <header>
      <div className={styles.Header}>
        <section className={styles.headingMd}>
          <nav className={styles.navbar}>
            <Link href="/">
              <a className={styles.navLink}>|Home|</a>
            </Link>
            <Link href="/skills">
              <a className={styles.navLink}>|Skills|</a>
            </Link>
            <Link href="/devlog">
              <a className={styles.navLink}>|Log|</a>
            </Link>
          </nav>
        </section>
        {renderThemeChanger()}
      </div>
      <div className={styles.horizLine} />
    </header>
  );
};

export default Header;
