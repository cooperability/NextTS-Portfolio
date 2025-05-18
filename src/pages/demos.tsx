import Layout from '../components/layout'
import Link from 'next/link'
import styles from '../styles/utils.module.css'
import ToggleDropdown from '../components/ToggleDropdown'
import ActiveIcon from '../components/ActiveIcon'
import Head from 'next/head'

const Demos: React.FC = () => {
  return (
    <Layout home={false}>
      <Head>
        <title>Demos | Cooper Reed | Co-Operability</title>
        <meta
          name="description"
          content="Cooper Reed's (Co-Operability) coding projects and tech demos."
        />
      </Head>
      <h1 className="visually-hidden">Demos</h1>
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
                alt="TypeScript logo"
                size="small"
              />
              <ActiveIcon
                href="https://nextjs.org/"
                imgSrc="/images/nextjs.png"
                alt="Next.js logo"
                size="small"
              />
              <ActiveIcon
                href="https://tailwindcss.com/"
                imgSrc="/images/tailwind.png"
                alt="Tailwind CSS logo"
                size="small"
                height={25}
                width={40}
              />
              <ActiveIcon
                href="https://nodejs.org/en"
                imgSrc="/images/njs.png"
                alt="Node.js logo"
                size="small"
              />
              <ActiveIcon
                href="https://vercel.com/"
                imgSrc="/images/vercel.png"
                alt="Vercel logo"
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
                alt="Docker logo"
                size="small"
                width={31.7}
                height={25}
              />
              <ActiveIcon
                href="https://www.python.org/"
                imgSrc="/images/python.png"
                alt="Python logo"
                size="small"
              />
              <ActiveIcon
                href="https://python-poetry.org/"
                imgSrc="/images/poetry.png"
                alt="Poetry logo"
                size="small"
              />
              <ActiveIcon
                href="https://www.djangoproject.com/"
                imgSrc="/images/django.png"
                alt="Django logo"
                size="small"
              />
              <ActiveIcon
                href="https://www.postgresql.org/"
                imgSrc="/images/postgresql.png"
                alt="PostgreSQL logo"
                size="small"
              />
              <ActiveIcon
                href="https://nodejs.org/en"
                imgSrc="/images/njs.png"
                alt="Node.js logo"
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
                alt="Python logo"
                size="small"
              />
              <ActiveIcon
                href="https://python-poetry.org/"
                imgSrc="/images/poetry.png"
                alt="Poetry logo"
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
                alt="TypeScript logo"
                size="small"
              />
              <ActiveIcon
                href="https://tailwindcss.com/"
                imgSrc="/images/tailwind.png"
                alt="Tailwind CSS logo"
                size="small"
                height={25}
                width={40}
              />
              <ActiveIcon
                href="https://nodejs.org/en"
                imgSrc="/images/njs.png"
                alt="Node.js logo"
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
                href="https://redux.js.org/"
                imgSrc="/images/redux.png"
                alt="Redux logo"
                size="small"
              />
              <ActiveIcon
                href="https://react.dev/"
                imgSrc="/images/react.png"
                alt="React logo"
                size="small"
              />
              <ActiveIcon
                href="https://tailwindcss.com/"
                imgSrc="/images/tailwind.png"
                alt="Tailwind CSS logo"
                size="small"
                height={25}
                width={40}
              />
              <ActiveIcon
                href="https://nodejs.org/en"
                imgSrc="/images/njs.png"
                alt="Node.js logo"
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
