import Link from 'next/link';
import styles from "../styles/utils.module.css";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <a className={styles.navLink} href="/">Home</a>
      <a className={styles.navLink} href="/skills">Skills</a>
      <a className={styles.navLink} href="/prompts">Prompts</a>
    </nav>
  );
};

export default Navbar;