import Layout from '../components/layout'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/utils.module.css'
import ToggleDropdown from '../components/ToggleDropdown'

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
              className={`${styles.hoverImage}`}
              width="50"
              height="50"
            />
          </a>
          <a href="https://nextjs.org/">
            <Image
              src="/images/nextjs.png"
              alt="Next.js"
              className={`${styles.hoverImage}`}
              width="50"
              height="50"
            />
          </a>
          <a href="https://tailwindcss.com/">
            <Image
              src="/images/css.png"
              alt="CSS"
              className={`${styles.hoverImage}`}
              width="50"
              height="50"
            />
          </a>
          <a href="https://tailwindcss.com/">
            <Image
              src="/images/tailwind.png"
              alt="Tailwind"
              className={`${styles.hoverImage}`}
              width="50"
              height="50"
            />
          </a>
        </div>
        <div>
          <p>
            <a href="https://github.com/cooperability/NextTS-Portfolio">
              cooperability.com[💻📱]
            </a>{' '}
            (You are here){' '}
          </p>
          <p>
            <Link href="/opioid-converter/">Opioid Converter[💻📱]</Link> (2021
            for Stanford Hospitals)
          </p>
          <p>
            <a href="https://lindabrettler.com">
              Lindabrettler.com (Squarespace)[💻📱]
            </a>{' '}
            (2022 for a friend)
          </p>
          <p>
            <a href="https://drive.google.com/file/d/1oDYsEytMWbKWmyotBZDIMBzoL5DM1tDV/view?usp=sharing">
              Personnel Portal (TS, Tailwind, Redux)[📽️]
            </a>
            (2021 @Edstruments)
          </p>
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
              className={`${styles.hoverImage}`}
              width="50"
              height="50"
            />
          </a>
          <a href="https://www.djangoproject.com/">
            <Image
              src="/images/django.png"
              alt="Django"
              className={`${styles.hoverImage}`}
              width="50"
              height="50"
            />
          </a>
          <a href="https://nodejs.org/en">
            <Image
              src="/images/njs.png"
              alt="Node.js"
              className={`${styles.hoverImage}`}
              width="50"
              height="50"
            />
          </a>
        </div>
        <div>
          <p>
            <a href="https://github.com/cooperability/nlp_ipynb/">
              NLP_ipynb (Python + SpaCy/NLTK/pd etc)
            </a>{' '}
            (Ongoing)
          </p>
        </div>
        <div className={styles.horizLine}></div>
        <div className={styles.linkRow}>
          <b>Database:</b>
          <a href="https://www.postgresql.org/">
            <Image
              src="/images/postgresql.png"
              alt="Postgres"
              className={`${styles.hoverImage}`}
              width="50"
              height="50"
            />
          </a>
          <a href="https://www.mongodb.com/">
            <Image
              src="/images/mongodb.png"
              alt="MongoDB"
              className={`${styles.hoverImage}`}
              width="50"
              height="50"
            />
          </a>
          <a href="https://firebase.google.com/">
            <Image
              src="/images/firebase.png"
              alt="Firebase"
              className={`${styles.hoverImage}`}
              width="40"
              height="40"
            />
          </a>
        </div>
        <div>
          <a href="https://github.com/cooperability/BMX-bookmark-extractor">
            BookMark eXtractor
          </a>
          (In Progress)(FastAPI, Docker, Neo4j, Python Cross-OGM project), a
          knowledge-tracking tool for your information diet.
        </div>
        <div className={styles.horizLine}></div>
        <ToggleDropdown title="Other Stack Elements I've Worked With">
          <p>
            <b>Lang:</b>
            <br />
            C++, Rust, Redis
            <br />
            <b>Web3:</b>
            <br />
            Solidity, Web3.js, Ethers.js, crypto.js, Lit Protocol, IPFS/Pinata
            <br />
            <b>Data Sci, ML/AI:</b>
            <br />
            Poetry, TensorFlow, PyTorch, Keras, NumPy, Pandas, Scikit-learn,
            LangChain
            <br />
            <b>DevOps:</b>
            <br />
            Kubernetes, Heroku, CircleCI, GitLab CI, Linear
          </p>
        </ToggleDropdown>
      </section>
    </Layout>
  )
}

export default Demos
