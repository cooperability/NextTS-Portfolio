import Link from 'next/link';
import styles from "../styles/utils.module.css";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <a className={styles.navLink}>Home</a>
      </Link>
      <Link href="/skills">
        <a className={styles.navLink}>Skills</a>
      </Link>
      <Link href="/devlog">
        <a className={styles.navLink}>Dev Log</a>
      </Link>
    </nav>
  );
};

export default Navbar;