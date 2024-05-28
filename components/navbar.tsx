import Link from 'next/link';
import styles from "../styles/utils.module.css";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <Link legacyBehavior href="/">
        <a className={styles.navLink}>Home</a>
      </Link>
      <Link legacyBehavior href="/skills">
        <a className={styles.navLink}>Skills</a>
      </Link>
      <Link legacyBehavior href="/resources">
        <a className={styles.navLink}>Resources</a>
      </Link>
    </nav>
  );
};

export default Navbar;