import Footer from "../sections/Footer";
import Layout, { siteTitle } from "../components/layout";
import Link from 'next/link';
import Image from "next/image";
import styles from "../styles/utils.module.css";

const Skills: React.FC = () => {
  return (
    <Layout home>
      <section className={styles.headingMd}>
        <p>
          <b>Front End</b>
        </p>
        <div className="flex flex-row justify-evenly">
          <Link href="https://react.dev/">
            <div className="hover:cursor-pointer">
              <Image
                src="/images/react.png"
                alt="React"
                width="50"
                height="50"
              />
            </div>
          </Link>
          <Link href="https://nextjs.org/">
            <div className="hover:cursor-pointer">
              <Image
                src="/images/nextjs.png"
                alt="Next.js"
                width="50"
                height="50"
              />
            </div>
          </Link>
          <Link href="https://tailwindcss.com/">
            <div className="hover:cursor-pointer">
              <Image
                src="/images/tailwind.png"
                alt="Next.js"
                width="50"
                height="50"
              />
            </div>
          </Link>
        </div>
        <div className={styles.horizLine}></div>
        <p>
          <b>Back End</b>
        </p>
        <div className="flex flex-row justify-evenly">
          <Link href="https://www.djangoproject.com/">
            <div className="hover:cursor-pointer">
              <Image
                src="/images/django.png"
                alt="Django"
                width="50"
                height="50"
              />
            </div>
          </Link>
          <Link href="https://www.postgresql.org/">
            <div className="hover:cursor-pointer">
              <Image
                src="/images/postgresql.png"
                alt="Postgres"
                width="50"
                height="50"
              />
            </div>
          </Link>
          <Link href="https://firebase.google.com/">
            <div className="hover:cursor-pointer">
              <Image
                src="/images/firebase.png"
                alt="Postgres"
                width="40"
                height="40"
              />
            </div>
          </Link>
          <Link href="https://www.mongodb.com/">
            <div className="hover:cursor-pointer">
              <Image
                src="/images/mongodb.png"
                alt="Postgres"
                width="50"
                height="50"
              />
            </div>
          </Link>
        </div>
      </section>
      <Footer />
    </Layout>
  );
};

export default Skills;