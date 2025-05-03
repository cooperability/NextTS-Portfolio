import React, { useState, ReactNode } from "react";
import styles from "../styles/utils.module.css"; // Import from utils.module.css
import { useTheme } from "next-themes"; // Import useTheme

interface ToggleDropdownProps {
  title: string;
  children: ReactNode;
  startOpen?: boolean; // Optional prop to start the dropdown open
}

const ToggleDropdown: React.FC<ToggleDropdownProps> = ({
  title,
  children,
  startOpen = false, // Default to closed
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(startOpen);
  const { theme } = useTheme(); // Get current theme ('light' or 'dark') from next-themes

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  // Determine theme classes based on the hook value
  // next-themes might return 'system', so we need to handle that or ensure 
  // your provider resolves 'system' before components access it. 
  // Assuming for now it resolves to 'light' or 'dark'.
  const isDarkMode = theme === 'dark';
  const dropdownThemeClass = isDarkMode ? styles.dropdownDark : styles.dropdownLight;
  const buttonThemeClass = isDarkMode ? styles.toggleButtonDark : styles.toggleButtonLight;
  const contentThemeClass = isDarkMode ? styles.contentDark : styles.contentLight;

  return (
    <div className={`${styles.dropdown} ${dropdownThemeClass}`}>
      <button onClick={toggleOpen} className={`${styles.toggleButton} ${buttonThemeClass}`}>
        {title}
        <span className={isOpen ? styles.arrowUp : styles.arrowDown}>▼</span>
      </button>
      {isOpen && (
        <div className={`${styles.content} ${contentThemeClass}`}>
          {children}
        </div>
      )}
    </div>
  );
};

export default ToggleDropdown; 