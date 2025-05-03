import Link from 'next/link';
import Image from "next/image";
import styles from "../styles/utils.module.css";

const Footer = () => {
  return (
    <footer className="px-2 sm:px-1 py-1 mt-2">
      <section className={styles.headingMd}>
        <div className={styles.horizLine} />
        <div className={styles.socialIconRow}>
          <a href="https://www.linkedin.com/in/cooper-reed/">
            <Image
              src="/images/Linkedin.png"
              alt="LinkedIn"
              className={`icon-link-image ${styles.socialsLink}`}
              width="50"
              height="50"
            />
          </a>
          <a href="https://github.com/cooperability" >
            <Image
              src="/images/Github.png"
              className={`icon-link-image ${styles.socialsLink}`}
              alt="GitHub"
              width="50"
              height="50"
            />
          </a>
          <a href="https://bsky.app/profile/cooperability.com">
            <Image
              src="/images/bluesky.png"
              alt="Bluesky"
              className={`icon-link-image ${styles.socialsLink}`}
              width="50"
              height="50"
            />
          </a>
          <a href="https://cooperability.substack.com/">
            <Image
              src="/images/substack.png"
              alt="Substack"
              className={`icon-link-image ${styles.socialsLink}`}
              width="50"
              height="50"
            />
          </a>
          <a href="https://www.youtube.com/@cooperability">
            <Image
              src="/images/Youtube.png"
              className={`icon-link-image ${styles.socialsLink}`}
              alt="Youtube"
              width="50"
              height="50"
            />
          </a>
        </div>
        <div className={styles.footerLinks}>
            <a href="https://docs.google.com/document/d/15wtKG9juJMYQOI793LvNYMfmeu7hyErO4xWixkTrSHI/edit?usp=sharing">Resume</a>
            <a href="/posts/linktree">All Links</a>
        </div>
        <div className={styles.footerText}>
            {" "}
            Cooper Reed
          &copy; {new Date().getFullYear()}
        </div>
      </section>
    </footer>
  );
};

export default Footer;
