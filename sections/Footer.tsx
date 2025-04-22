import Link from 'next/link';
import Image from "next/image";
import styles from "../styles/utils.module.css";

const Footer = () => {
  return (
    <footer className="px-2 sm:px-1 py-1 mt-2">
      <section className={styles.headingMd}>
        <div className={styles.horizLine} />
        <div className="flex flex-row justify-between">
          <Link href="https://www.linkedin.com/in/cooper-reed/">
            <div className="hover:cursor-pointer">
              <Image
                src="/images/Linkedin.png"
                alt="LinkedIn"
                className={styles.socialsLink}
                width="50"
                height="50"
              />
            </div>
          </Link>
          <Link href="https://github.com/cooperability">
            <div className="hover:cursor-pointer flex:horizontal justify-center items-center">
              <Image
                src="/images/Github.png"
                className={styles.socialsLink}
                alt="GitHub"
                width="50"
                height="50"
              />
            </div>
          </Link>
          <Link href="https://bsky.app/profile/cooperability.com">
            <div className="hover:cursor-pointer flex:horizontal justify-center items-center">
              <Image
                src="/images/bluesky.png"
                alt="Twitter"
                className={styles.socialsLink}
                width="50"
                height="50"
              />
            </div>
          </Link>
          <Link href="https://cooperability.substack.com/">
            <div className="hover:cursor-pointer flex:horizontal justify-center items-center">
              <Image
                src="/images/substack.png"
                alt="Substack"
                className={styles.socialsLink}
                width="50"
                height="50"
              />
            </div>
          </Link>
          <Link href="https://www.youtube.com/@cooperability">
            <div className="hover:cursor-pointer flex:horizontal justify-center items-center">
              <Image
                src="/images/Youtube.png"
                className={styles.socialsLink}
                alt="Youtube"
                width="50"
                height="50"
              />
            </div>
          </Link>
        </div>
        <div className="text-center text-sm text-gray-500">
          <span className="dark:text-gray-100 text-gray-900 text-lg mr-2">
            {" "}
            <u><a href="https://docs.google.com/document/d/15wtKG9juJMYQOI793LvNYMfmeu7hyErO4xWixkTrSHI/edit?usp=sharing">Resume</a></u>&nbsp;&nbsp;&nbsp;
            <u><a href ="/posts/linktree">All Links</a></u>
          </span>{" "}
        </div>
        <div className="text-center text-sm text-gray-500">
          <span className="dark:text-gray-100 text-gray-900 font-bold text-lg mr-2">
            {" "}
            Cooper Reed
          </span>{" "}
          &copy; {new Date().getFullYear()}
        </div>
      </section>
    </footer>
  );
};

export default Footer;
