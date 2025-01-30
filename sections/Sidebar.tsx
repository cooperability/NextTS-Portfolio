import React from "react";
import Link from "next/link";
import styles from "../styles/utils.module.css";
import ActiveLink from "../components/activeLink";

const Sidebar = ({ 
  isOpen,
  onClose 
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
    return (
        <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
            <button className={styles.closeButton} onClick={onClose}>
                Close
            </button>
            <nav className={styles.sidebarNav}>
                <ActiveLink activeClassName="active" href="/">
                    <a className={styles.navLink}>| Home |</a>
                </ActiveLink>
                <ActiveLink activeClassName="active" href="/skills">
                    <a className={styles.navLink}>| Skills |</a>
                </ActiveLink>
                <ActiveLink activeClassName="active" href="/prompts">
                    <a className={styles.navLink}>| Prompts |</a>
                </ActiveLink>
            </nav>
        </div>
    );
};

export default Sidebar;
