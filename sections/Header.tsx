"use client"
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon, MenuIcon, XIcon } from "@heroicons/react/solid"; // Import MenuIcon and XIcon
import styles from "../styles/utils.module.css";
import Link from "next/link";
import Sidebar from "./Sidebar";
import ActiveLink from "../components/activeLink";

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (window) {
      const checkWindowSize = () => {
        setIsMobile(window.innerWidth <= 500);
      };
      checkWindowSize();
      window.addEventListener("resize", checkWindowSize);
      return () => {
        window.removeEventListener("resize", checkWindowSize);
      };
    }
  }, []);

  const navigator = () => {
    if (isMobile) {
      return (
        <div suppressHydrationWarning={true}>
          <button
            onClick={toggleSidebar}
            aria-label="Toggle Menu"
          >
            {isSidebarOpen ? (
              <XIcon className="w-7 h-7" />
            ) : (
              <MenuIcon className="w-7 h-7" />
            )}
          </button>
        </div>
      );
    } else {
      return (
        <div className="flex flex-row space-between">
          <ActiveLink activeClassName="active" href="/">
            <a className={styles.navLink}>| Home |</a>
          </ActiveLink>
          <ActiveLink activeClassName="active" href="/demos">
            <a className={styles.navLink}>| Demos |</a>
          </ActiveLink>
          <ActiveLink activeClassName="active" href="/skills">
            <a className={styles.navLink}>| Skills |</a>
          </ActiveLink>
          <ActiveLink activeClassName="active" href="/devlog">
            <a className={styles.navLink}>| Log |</a>
          </ActiveLink>
        </div>
      );
    }
  }

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <button
          className="bg-slate-100 hover:bg-slate-300 text-black font-bold py-1 px-1 rounded flex"
          onClick={() => setTheme("light")}
        >
          <SunIcon className="w-7 h-7 text-yellow-500 " role="button" />
          Light
        </button>
      );
    } else {
      return (
        <button
          className="bg-slate-600 hover:bg-slate-800 text-white font-bold py-1 px-1 rounded flex"
          onClick={() => setTheme("dark")}
        >
          <MoonIcon className="w-7 h-7 text-gray-900 " role="button" />
          Dark
        </button>
      );
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div suppressHydrationWarning>
      <div className={styles.Header} suppressHydrationWarning>
        <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
        <nav className={styles.navbar} suppressHydrationWarning>
          {navigator()}
        </nav>
        {renderThemeChanger()}
      </div>
      <div className={styles.horizLine} />
    </div>
  );
};

export default Header;
