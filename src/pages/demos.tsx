import Layout from '../components/layout'
import Link from 'next/link'
import styles from '../styles/utils.module.css'
import ToggleDropdown from '../components/ToggleDropdown'
import ActiveIcon from '../components/ActiveIcon'

const Demos: React.FC = () => {
  return (
    <Layout home>
      <section className={styles.headingMd}>
        <div>
          <div className={styles.projectItem}>
            <a href="https://github.com/cooperability/NextTS-Portfolio">
              cooperability.com[💻📱]
            </a>{' '}
            (You are here){' '}
            <ActiveIcon
              href="https://react.dev/"
              imgSrc="/images/react.png"
              size="small"
            />
            <ActiveIcon
              href="https://nextjs.org/"
              imgSrc="/images/nextjs.png"
              size="small"
            />
            <ActiveIcon
              href="https://tailwindcss.com/"
              imgSrc="/images/tailwind.png"
              size="small"
            />
            <ActiveIcon
              href="https://nodejs.org/en"
              imgSrc="/images/njs.png"
              size="small"
            />
            {/* Add TypeScript icon here when available: <ActiveIcon href="https://www.typescriptlang.org/" imgSrc="/images/typescript.png" size="small" /> */}
          </div>
          <div>
            <Link href="/opioid-converter/">Opioid Converter[💻📱]</Link> (2021
            @Stanford Hospitals){' '}
            <ActiveIcon
              href="https://react.dev/"
              imgSrc="/images/react.png"
              size="small"
            />
            <ActiveIcon
              href="https://tailwindcss.com/"
              imgSrc="/images/tailwind.png"
              size="small"
            />
            <ActiveIcon
              href="https://nodejs.org/en"
              imgSrc="/images/njs.png"
              size="small"
            />
            {/* Add TypeScript icon here when available: <ActiveIcon href="https://www.typescriptlang.org/" imgSrc="/images/typescript.png" size="small" /> */}
          </div>
          <div className={styles.projectItem}>
            <a href="https://drive.google.com/file/d/1oDYsEytMWbKWmyotBZDIMBzoL5DM1tDV/view?usp=sharing">
              Personnel Portal[📽️]
            </a>
            (2021 @Edstruments){' '}
            <ActiveIcon
              href="https://react.dev/"
              imgSrc="/images/react.png"
              size="small"
            />
            <ActiveIcon
              href="https://tailwindcss.com/"
              imgSrc="/images/tailwind.png"
              size="small"
            />
            <ActiveIcon
              href="https://nodejs.org/en"
              imgSrc="/images/njs.png"
              size="small"
            />
            {/* Add Redux icon if available and desired */}
          </div>
        </div>
        <div>
          <div className={styles.projectItem}>
            <a href="https://github.com/cooperability/nlp_ipynb/">NLP_ipynb</a>{' '}
            (Ongoing){' '}
            <ActiveIcon
              href="https://www.python.org/"
              imgSrc="/images/python.png"
              size="small"
            />
          </div>
        </div>
        <div className={styles.projectItem}>
          <a href="https://github.com/cooperability/BMX-bookmark-extractor">
            BookMark eXtractor
          </a>
          (Ongoing){' '}
          <ActiveIcon
            href="https://www.python.org/"
            imgSrc="/images/python.png"
            size="small"
          />
          <ActiveIcon
            href="https://www.djangoproject.com/"
            imgSrc="/images/django.png"
            size="small"
          />
          <ActiveIcon
            href="https://www.postgresql.org/"
            imgSrc="/images/postgresql.png"
            size="small"
          />
          <ActiveIcon
            href="https://www.mongodb.com/"
            imgSrc="/images/mongodb.png"
            size="small"
          />
          <ActiveIcon
            href="https://firebase.google.com/"
            imgSrc="/images/firebase.png"
            size="small"
          />
          <ActiveIcon
            href="https://nodejs.org/en"
            imgSrc="/images/njs.png"
            size="small"
          />
        </div>
        <ToggleDropdown title="Other Stack Elements I've Worked With">
          <p>
            <b>Lang:</b>
            <br />
            C++, Rust, Redis, TypeScript, Redux, Neo4j
            <br />
            <b>Web3:</b>
            <br />
            Solidity, Web3.js, Ethers.js, crypto.js, Lit Protocol, IPFS/Pinata
            <br />
            <b>Data Sci, ML/AI:</b>
            <br />
            Poetry, TensorFlow, PyTorch, Keras, NumPy, Pandas, Scikit-learn,
            LangChain, SpaCy, NLTK
            <br />
            <b>DevOps:</b>
            <br />
            Kubernetes, Docker, Heroku, CircleCI, GitLab CI, Linear, Vercel
          </p>
        </ToggleDropdown>
      </section>
    </Layout>
  )
}

export default Demos
