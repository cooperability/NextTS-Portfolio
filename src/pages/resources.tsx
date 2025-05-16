import Date from '../components/date'
import Layout from '../components/layout'
import { GetStaticProps } from 'next'
import styles from '../styles/utils.module.css'
import { getAllResourcesData, ResourceData } from '../lib/resources'
import Head from 'next/head'

interface ResourcesProps {
  allPostsData: ResourceData[]
}

export default function Resources({ allPostsData }: ResourcesProps) {
  return (
    <Layout home={false}>
      <Head>
        <title>Resources - Co-Operability</title>
      </Head>
      <h1 className="visually-hidden">Resources</h1>
      <section className={`${styles.headingMd} ${styles.padding1px}`}>
        <ul className={styles.list}>
          {allPostsData
            ?.sort((a, b) => b.date.localeCompare(a.date))
            .map(({ id, date, title }: ResourceData) => (
              <li className={styles.listItem} key={id}>
                <a href={`/resources/${id}`}>{title}</a>
                <span> </span>
                <small className={styles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
        </ul>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getAllResourcesData()

  return {
    props: {
      allPostsData,
    },
  }
}
