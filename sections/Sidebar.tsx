import React from "react";
import Link from "next/link";
import styles from "../styles/utils.module.css";

const Sidebar = ({ isOpen, onClose }) => {
    return (
        <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
            <button className={styles.closeButton} onClick={onClose}>
                Close
            </button>
            <nav className={styles.sidebarNav}>
                <Link href="/">Home</Link>
                <Link href="/skills">Skills</Link>
                <Link href="/devlog">Log</Link>
                {/* Add more links as needed */}
            </nav>
        </div>
    );
};

export default Sidebar;
