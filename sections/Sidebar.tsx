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
                <ActiveLink className={styles.navLink} activeClassName={styles.boldLink} href="/">
                    | Home |
                </ActiveLink>
                <ActiveLink className={styles.navLink} activeClassName={styles.boldLink} href="/skills">
                    | Skills |
                </ActiveLink>
                <ActiveLink className={styles.navLink} activeClassName={styles.boldLink} href="/prompts">
                    | Prompts |
                </ActiveLink>
            </nav>
        </div>
    );
};

export default Sidebar;
