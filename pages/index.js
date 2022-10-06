import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h3>
          <a href="https://www.linkedin.com/in/cooper-reed/">Linkedin</a>
          |  |
          <a href="https://github.com/cooperability">GitHub</a>
          |  |
          <a href="https://twitter.com/Cooperability">Twitter</a>
          |  |
          <a href="https://mirror.xyz/0xAd7f62080c882D575DCd6F5eb29cB9C09B0d4B0D">Mirror</a>
          |  |
          <a href="https://www.youtube.com/channel/UCFVGgrZZ80P1DN4nIot6TDg">YouTube</a>
        </h3>
      </section>
      <section className={utilStyles.headingMd}>
        <p>Hi, I’m Cooper! I’ve been building and teaching software for 
        the last four years. Making music and producing concerts for three. 
        Education and building for educators for three. Blockchain for two.</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>History of Co-Operability</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
