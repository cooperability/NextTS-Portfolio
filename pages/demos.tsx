import Layout from "../components/layout";
import Link from 'next/link';
import Image from "next/image";
import styles from "../styles/utils.module.css";

const Demos: React.FC = () => {
  return (
    <Layout home>
      <section className={styles.headingMd}>
        <p>
          <b>Front End:</b>
        </p>
        <div className={styles.linkRow}>
            <a href="https://react.dev/" >
              <Image
                src="/images/react.png"
                alt="React"
                className={`icon-link-image ${styles.hoverImage}`}
                width="50"
                height="50"
              />
            </a>
            <a href="https://nextjs.org/" >
              <Image
                src="/images/nextjs.png"
                alt="Next.js"
                className={`icon-link-image ${styles.hoverImage}`}
                width="50"
                height="50"
              />
            </a>
            <a href="https://tailwindcss.com/" >
              <Image
                src="/images/css.png"
                alt="CSS"
                className={`icon-link-image ${styles.hoverImage}`}
                width="50"
                height="50"
              />
            </a>
            <a href="https://tailwindcss.com/" >
              <Image
                src="/images/tailwind.png"
                alt="Tailwind"
                className={`icon-link-image ${styles.hoverImage}`}
                width="50"
                height="50"
              />
            </a>
        </div>
        <div>
          <a href="/opioid-converter"><u><b>Opioid Converter</b></u>(TypeScript + CSS)[💻📱]</a>
          <br />
          <a href="https://github.com/cooperability/NextTS-Portfolio"><u><b>This website</b></u>(NextJS, TS, Tailwind, Vercel)[💻📱]</a>
          <br />
          <a href="https://drive.google.com/file/d/1oDYsEytMWbKWmyotBZDIMBzoL5DM1tDV/view?usp=sharing"><u><b>Edstruments Personnel Portal</b></u>(React, TS, Tailwind, Redux)[📽️]</a>
          <br />
          <a href="https://lindabrettler.com"><u><b>Lindabrettler.com</b></u>(Squarespace)[💻📱]</a>
        </div>
        <div className={styles.horizLine}></div>
        <p>
            <b>Back End:</b>
          </p>
        <div className={styles.linkRow}>
            <a href="https://www.python.org/" >
              <Image
                src="/images/python.png"
                alt="Python"
                className={`icon-link-image ${styles.hoverImage}`}
                width="50"
                height="50"
              />
            </a>
            <a href="https://www.djangoproject.com/" >
              <Image
                src="/images/django.png"
                alt="Django"
                className={`icon-link-image ${styles.hoverImage}`}
                width="50"
                height="50"
              />
            </a>
          <a href="https://nodejs.org/en" >
            <Image
              src="/images/njs.png"
              alt="Node.js"
              className={`icon-link-image ${styles.hoverImage}`}
              width="50"
              height="50"
            />
          </a>
        </div>
        <div>
          <a href="https://github.com/cooperability/nlp_ipynb/"><u><b>NLP_ipynb</b></u>(Python + SpaCy/NLTK/pd etc)[💻📱]</a>
        </div>
        <div className={styles.horizLine}></div>
        <p>
            <b>Database:</b>
          </p>
        <div className={styles.linkRow}>
          <a href="https://www.postgresql.org/" >
            <Image
              src="/images/postgresql.png"
              alt="Postgres"
              className={`icon-link-image ${styles.hoverImage}`}
              width="50"
              height="50"
            />
          </a>
          <a href="https://www.mongodb.com/" >
            <Image
              src="/images/mongodb.png"
              alt="MongoDB"
              className={`icon-link-image ${styles.hoverImage}`}
              width="50"
              height="50"
            />
          </a>
          <a href="https://firebase.google.com/" >
            <Image
              src="/images/firebase.png"
              alt="Firebase"
              className={`icon-link-image ${styles.hoverImage}`}
              width="40"
              height="40"
            />
          </a>
        </div>
        <div>
          WIP: <a href="https://github.com/cooperability/BMX-bookmark-extractor"><u><b>BMX, the BookMark eXtractor</b></u></a>
          , a user-friendly pipeline for organizing and ingesting web data into AI models.
        </div>
      </section>
    </Layout>
  );
};

export default Demos;