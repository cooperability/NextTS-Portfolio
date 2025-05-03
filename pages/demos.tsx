import Layout from '../components/layout'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/utils.module.css'
import Head from 'next/head'

const Demos: React.FC = () => {
  return (
    <Layout home>
      <section className={styles.headingMd}>
        <div className={styles.linkRow}>
          <p>
            <b>Front End:</b>
          </p>
          <a href="https://react.dev/">
            <Image
              src="/images/react.png"
              alt="React"
              className={`icon-link-image ${styles.hoverImage}`}
              width="50"
              height="50"
            />
          </a>
          <a href="https://nextjs.org/">
            <Image
              src="/images/nextjs.png"
              alt="Next.js"
              className={`icon-link-image ${styles.hoverImage}`}
              width="50"
              height="50"
            />
          </a>
          <a href="https://tailwindcss.com/">
            <Image
              src="/images/css.png"
              alt="CSS"
              className={`icon-link-image ${styles.hoverImage}`}
              width="50"
              height="50"
            />
          </a>
          <a href="https://tailwindcss.com/">
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
          <Link
            href="/opioid-converter/"
            className="text-indigo-600 hover:text-indigo-900"
          >
            Opioid Converter (TypeScript + CSS)[💻📱]
          </Link>
          <br />
          <a href="https://github.com/cooperability/NextTS-Portfolio">
            cooperability.com (NextJS, TS, Tailwind, Vercel)[💻📱]
          </a>
          <br />
          <a href="https://drive.google.com/file/d/1oDYsEytMWbKWmyotBZDIMBzoL5DM1tDV/view?usp=sharing">
            Edstruments Personnel Portal (TS, Tailwind, Redux)[📽️]
          </a>
          <br />
          <a href="https://lindabrettler.com">
            Lindabrettler.com (Squarespace)[💻📱]
          </a>
        </div>
        <div className={styles.horizLine}></div>
        <div className={styles.linkRow}>
          <p>
            <b>Back End:</b>
          </p>
          <a href="https://www.python.org/">
            <Image
              src="/images/python.png"
              alt="Python"
              className={`icon-link-image ${styles.hoverImage}`}
              width="50"
              height="50"
            />
          </a>
          <a href="https://www.djangoproject.com/">
            <Image
              src="/images/django.png"
              alt="Django"
              className={`icon-link-image ${styles.hoverImage}`}
              width="50"
              height="50"
            />
          </a>
          <a href="https://nodejs.org/en">
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
          <a href="https://github.com/cooperability/nlp_ipynb/">
            NLP_ipynb (Python + SpaCy/NLTK/pd etc)[💻📱]
          </a>
        </div>
        <div className={styles.horizLine}></div>
        <div className={styles.linkRow}>
          <b>Database:</b>
          <a href="https://www.postgresql.org/">
            <Image
              src="/images/postgresql.png"
              alt="Postgres"
              className={`icon-link-image ${styles.hoverImage}`}
              width="50"
              height="50"
            />
          </a>
          <a href="https://www.mongodb.com/">
            <Image
              src="/images/mongodb.png"
              alt="MongoDB"
              className={`icon-link-image ${styles.hoverImage}`}
              width="50"
              height="50"
            />
          </a>
          <a href="https://firebase.google.com/">
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
          WIP:{' '}
          <a href="https://github.com/cooperability/BMX-bookmark-extractor">
            BMX, the BookMark eXtractor
          </a>
          , a user-friendly pipeline for organizing and ingesting web data into
          AI models.
        </div>
      </section>
    </Layout>
  )
}

export default Demos
