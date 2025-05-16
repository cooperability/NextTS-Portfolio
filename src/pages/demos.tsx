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
            <div className={styles.projectInfo}>
              <a href="https://github.com/cooperability/NextTS-Portfolio">
                cooperability.com[💻📱]
              </a>
              <span className={styles.projectStatus}>(Ongoing)</span>
            </div>
            <div className={styles.techStackIcons}>
              <ActiveIcon
                href="https://www.typescriptlang.org/"
                imgSrc="/images/typescript.png"
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
                height={25}
                width={40}
              />
              <ActiveIcon
                href="https://nodejs.org/en"
                imgSrc="/images/njs.png"
                size="small"
              />
              <ActiveIcon
                href="https://vercel.com/"
                imgSrc="/images/vercel.png"
                size="small"
              />
            </div>
          </div>
          <div className={styles.projectItem}>
            <div className={styles.projectInfo}>
              <a href="https://github.com/cooperability/BMX-bookmark-extractor">
                BookMark eXtractor
              </a>
              <span className={styles.projectStatus}>(Ongoing)</span>
            </div>
            <div className={styles.techStackIcons}>
              <ActiveIcon
                href="https://www.docker.com/"
                imgSrc="/images/docker.png"
                size="small"
                width={31.7}
                height={25}
              />
              <ActiveIcon
                href="https://www.python.org/"
                imgSrc="/images/python.png"
                size="small"
              />
              <ActiveIcon
                href="https://python-poetry.org/"
                imgSrc="/images/poetry.png"
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
                href="https://nodejs.org/en"
                imgSrc="/images/njs.png"
                size="small"
              />
            </div>
          </div>
          <div className={styles.projectItem}>
            <div className={styles.projectInfo}>
              <a href="https://github.com/cooperability/nlp_ipynb/">
                NLP_ipynb
              </a>
              <span className={styles.projectStatus}>(Ongoing)</span>
            </div>
            <div className={styles.techStackIcons}>
              <ActiveIcon
                href="https://www.python.org/"
                imgSrc="/images/python.png"
                size="small"
              />
              <ActiveIcon
                href="https://python-poetry.org/"
                imgSrc="/images/poetry.png"
                size="small"
              />
            </div>
          </div>
          <div className={styles.projectItem}>
            <div className={styles.projectInfo}>
              <Link href="/opioid-converter/">Opioid Converter[💻📱]</Link>
              <span className={styles.projectStatus}>(2021)</span>
            </div>
            <div className={styles.techStackIcons}>
              <ActiveIcon
                href="https://www.typescriptlang.org/"
                imgSrc="/images/typescript.png"
                size="small"
              />
              <ActiveIcon
                href="https://tailwindcss.com/"
                imgSrc="/images/tailwind.png"
                size="small"
                height={25}
                width={40}
              />
              <ActiveIcon
                href="https://nodejs.org/en"
                imgSrc="/images/njs.png"
                size="small"
              />
            </div>
          </div>
          <div className={styles.projectItem}>
            <div className={styles.projectInfo}>
              <a href="https://drive.google.com/file/d/1oDYsEytMWbKWmyotBZDIMBzoL5DM1tDV/view?usp=sharing">
                Personnel Portal[📽️]
              </a>
              <span className={styles.projectStatus}>(2020)</span>
            </div>
            <div className={styles.techStackIcons}>
              <ActiveIcon
                href="https://react.dev/"
                imgSrc="/images/react.png"
                size="small"
              />
              <ActiveIcon
                href="https://tailwindcss.com/"
                imgSrc="/images/tailwind.png"
                size="small"
                height={25}
                width={40}
              />
              <ActiveIcon
                href="https://nodejs.org/en"
                imgSrc="/images/njs.png"
                size="small"
              />
              <ActiveIcon
                href="https://redux.js.org/"
                imgSrc="/images/redux.png"
                size="small"
              />
            </div>
          </div>
        </div>
        <ToggleDropdown title="Other Stack Elements I've Worked With">
          <p>
            <b>Lang:</b>
            <br />
            C++, Rust, Redis, Neo4j
            <br />
            <b>Web3:</b>
            <br />
            Solidity, Web3.js, Ethers.js, crypto.js, Lit Protocol, IPFS/Pinata
            <br />
            <b>Data Sci, ML/AI:</b>
            <br />
            TensorFlow, PyTorch, Keras, NumPy, Pandas, Scikit-learn, LangChain,
            SpaCy, NLTK
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
