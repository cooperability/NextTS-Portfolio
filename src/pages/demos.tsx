import Layout from '../components/layout'
import Link from 'next/link'
import styles from '../styles/utils.module.css'
import ToggleDropdown from '../components/ToggleDropdown'
import ActiveIcon from '../components/ActiveIcon'

const Demos: React.FC = () => {
  return (
    <Layout home>
      <section className={styles.headingMd}>
        <div className={styles.linkRow}>
          <p>
            <b>Front End:</b>
          </p>
          <ActiveIcon href="https://react.dev/" imgSrc="/images/react.png" />
          <ActiveIcon href="https://nextjs.org/" imgSrc="/images/nextjs.png" />
          <ActiveIcon
            href="https://tailwindcss.com/"
            imgSrc="/images/css.png"
          />
          <ActiveIcon
            href="https://tailwindcss.com/"
            imgSrc="/images/tailwind.png"
          />
        </div>
        <div>
          <div>
            <a href="https://github.com/cooperability/NextTS-Portfolio">
              cooperability.com[💻📱]
            </a>{' '}
            (You are here){' '}
          </div>
          <div>
            <Link href="/opioid-converter/">Opioid Converter[💻📱]</Link> (2021
            for Stanford Hospitals)
          </div>
          <div>
            <a href="https://lindabrettler.com">
              Lindabrettler.com (Squarespace)[💻📱]
            </a>{' '}
            (2022 for a friend)
          </div>
          <div>
            <a href="https://drive.google.com/file/d/1oDYsEytMWbKWmyotBZDIMBzoL5DM1tDV/view?usp=sharing">
              Personnel Portal (TS, Tailwind, Redux)[📽️]
            </a>
            (2021 @Edstruments)
          </div>
        </div>
        <div className={styles.horizLine}></div>
        <div className={styles.linkRow}>
          <p>
            <b>Back End:</b>
          </p>
          <ActiveIcon
            href="https://www.python.org/"
            imgSrc="/images/python.png"
          />
          <ActiveIcon
            href="https://www.djangoproject.com/"
            imgSrc="/images/django.png"
          />
          <ActiveIcon href="https://nodejs.org/en" imgSrc="/images/njs.png" />
        </div>
        <div>
          <div>
            <a href="https://github.com/cooperability/nlp_ipynb/">
              NLP_ipynb (Python + SpaCy/NLTK/pd etc)
            </a>{' '}
            (Ongoing)
          </div>
        </div>
        <div className={styles.horizLine}></div>
        <div className={styles.linkRow}>
          <b>Database:</b>
          <ActiveIcon
            href="https://www.postgresql.org/"
            imgSrc="/images/postgresql.png"
          />
          <ActiveIcon
            href="https://www.mongodb.com/"
            imgSrc="/images/mongodb.png"
          />
          <ActiveIcon
            href="https://firebase.google.com/"
            imgSrc="/images/firebase.png"
          />
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
