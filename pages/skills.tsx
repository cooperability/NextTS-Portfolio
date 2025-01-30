import Layout from "../components/layout";
import Link from 'next/link';
import Image from "next/image";
import styles from "../styles/utils.module.css";

const Skills: React.FC = () => {
  return (
    <Layout home>
      <section className={styles.headingMd}>
        <p>
          <b>Front End:</b>
        </p>
        <div className="flex flex-row justify-evenly mb-2">
          <div className="flex">
            <Link href="https://react.dev/">
              <div className="hover:cursor-pointer">
                <Image
                  src="/images/react.png"
                  alt="React"
                  className={styles.hoverImage}
                  width="50"
                  height="50"
                />
              </div>
            </Link>
            <span>&nbsp; + &nbsp;</span>
            <Link href="https://nextjs.org/">
              <div className="hover:cursor-pointer">
                <Image
                  src="/images/nextjs.png"
                  alt="Next.js"
                  className={styles.hoverImage}
                  width="50"
                  height="50"
                />
              </div>
            </Link>
          </div>
          <div className="flex">
            <Link href="https://tailwindcss.com/">
              <div className="hover:cursor-pointer">
                <Image
                  src="/images/css.png"
                  alt="Next.js"
                  className={styles.hoverImage}
                  width="50"
                  height="50"
                />
              </div>
            </Link>
            <span>&nbsp; + &nbsp;</span>
            <Link href="https://tailwindcss.com/">
              <div className="hover:cursor-pointer">
                <Image
                  src="/images/tailwind.png"
                  alt="Next.js"
                  className={styles.hoverImage}
                  width="50"
                  height="50"
                />
              </div>
            </Link>
          </div>
        </div>
        <div>
          <a href="/opioid-converter"><u><b>Opioid Converter</b></u>(TypeScript + CSS)[💻📱]</a>
          <br />
          <Link href="https://github.com/cooperability/NextTS-Portfolio"><u><b>This website</b></u>(NextJS, TS, Tailwind, Vercel)[💻📱]</Link>
          <br />
          <Link href="https://drive.google.com/file/d/1oDYsEytMWbKWmyotBZDIMBzoL5DM1tDV/view?usp=sharing"><u><b>Edstruments Personnel Portal</b></u>(React, TS, Tailwind, Redux)[📽️]</Link>
          <br />
          <Link href="https://lindabrettler.com"><u><b>Lindabrettler.com</b></u>(Squarespace)[💻📱]</Link>
        </div>
        <div className={styles.horizLine}></div>
        <p>
            <b>Back End:</b>
          </p>
        <div className="flex flex-row justify-evenly mb-2">
          <div className="flex">
            <Link href="https://www.python.org/">
              <div className="hover:cursor-pointer">
                <Image
                  src="/images/python.png"
                  alt="Django"
                  className={styles.hoverImage}
                  width="50"
                  height="50"
                />
              </div>
            </Link>
            <span>&nbsp; + &nbsp;</span>
            <Link href="https://www.djangoproject.com/">
              <div className="hover:cursor-pointer">
                <Image
                  src="/images/django.png"
                  alt="Django"
                  className={styles.hoverImage}
                  width="50"
                  height="50"
                />
              </div>
            </Link>
          </div>
          <Link href="https://nodejs.org/en">
            <div className="hover:cursor-pointer">
              <Image
                src="/images/njs.png"
                alt="Django"
                className={styles.hoverImage}
                width="50"
                height="50"
              />
            </div>
          </Link>
        </div>
        <div>
          <Link href="https://github.com/cooperability/nlp_ipynb/"><u><b>NLP_ipynb</b></u>(Python + SpaCy/NLTK/pd etc)[💻📱]</Link>
        </div>
        <div className={styles.horizLine}></div>
        <p>
            <b>Database:</b>
          </p>
        <div className="flex flex-row justify-evenly mb-2">
          <Link href="https://www.postgresql.org/">
            <div className="hover:cursor-pointer">
              <Image
                src="/images/postgresql.png"
                alt="Postgres"
                className={styles.hoverImage}
                width="50"
                height="50"
              />
            </div>
          </Link>
          <Link href="https://www.mongodb.com/">
            <div className="hover:cursor-pointer">
              <Image
                src="/images/mongodb.png"
                alt="MongoDB"
                className={styles.hoverImage}
                width="50"
                height="50"
              />
            </div>
          </Link>
          <Link href="https://firebase.google.com/">
            <div className="hover:cursor-pointer">
              <Image
                src="/images/firebase.png"
                alt="Firebase"
                className={styles.hoverImage}
                width="40"
                height="40"
              />
            </div>
          </Link>
        </div>
        <div>
          WIP: <a href="https://github.com/cooperability/BMX-bookmark-extractor"><u><b>BMX, the BookMark eXtractor</b></u></a>
          , a user-friendly pipeline for organizing and ingesting web data into AI models.
        </div>
      </section>
    </Layout>
  );
};

export default Skills;