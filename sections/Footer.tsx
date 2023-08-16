import Link from 'next/link';
import Image from "next/image";
import styles from "../styles/utils.module.css";


const Footer = () => {
  return (
    <footer className="px-2 sm:px-1 py-1 mt-2">
      <section className={styles.headingMd}>
        <div className={styles.horizLine}></div>
        <div className="flex flex-row justify-between">
          <Link href="https://www.linkedin.com/in/cooper-reed/">
            <div className="hover:cursor-pointer">
              <Image
                src="/images/Linkedin.png"
                alt="LinkedIn"
                width="50"
                height="50"
              />
            </div>
          </Link>
          <Link href="https://github.com/cooperability">
            <div className="hover:cursor-pointer flex:horizontal justify-center items-center">
              <Image
                src="/images/Github.png"
                alt="GitHub"
                width="50"
                height="50"
              />
            </div>
          </Link>
          <Link href="https://twitter.com/Cooperability">
            <div className="hover:cursor-pointer flex:horizontal justify-center items-center">
              <Image
                src="/images/Twitter.png"
                alt="Twitter"
                width="50"
                height="50"
              />
            </div>
          </Link>
          <Link href="https://mirror.xyz/0xAd7f62080c882D575DCd6F5eb29cB9C09B0d4B0D">
            <div className="hover:cursor-pointer flex:horizontal justify-center items-center">
              <Image
                src="/images/Mirror.jpeg"
                alt="Mirror"
                width="50"
                height="50"
              />
            </div>
          </Link>
          <Link href="https://www.youtube.com/channel/cooperability">
            <div className="hover:cursor-pointer flex:horizontal justify-center items-center">
              <Image
                src="/images/Youtube.png"
                alt="Youtube"
                width="50"
                height="50"
              />
            </div>
          </Link>
          <Link href="https://www.imdb.com/name/nm5343773/">
            <div className="hover:cursor-pointer flex:horizontal justify-center items-center">
              <Image src="/images/IMDb.png" alt="IMDb" width="50" height="50" />
            </div>
          </Link>
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
