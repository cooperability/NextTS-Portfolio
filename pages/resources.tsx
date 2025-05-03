import Date from '../components/date'
import utilStyles from '../styles/utils.module.css'
import Layout from '../components/layout'
import { GetStaticProps } from 'next'
import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'
import styles from '../styles/utils.module.css'

interface PostData {
  id: string
  date: string
  title: string
}

interface ResourcesProps {
  allPostsData: PostData[]
}

export default function Resources({ allPostsData }: ResourcesProps) {
  return (
    <Layout home>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ul className={utilStyles.list}>
          {allPostsData
            ?.sort((a, b) => b.date.localeCompare(a.date))
            .map(({ id, date, title }: PostData) => (
              <li className={utilStyles.listItem} key={id}>
                <a href={`/resources/${id}`}>{title}</a>
                <span> </span>
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

const POSTS_PATH = path.join(process.cwd(), 'resources')

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const fileNames = fs.readdirSync(POSTS_PATH)

  const allPostsData = fileNames.map((fileName) => {
    const fullPath = path.join(POSTS_PATH, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const { data } = matter(fileContents)

    return {
      id: fileName.replace(/\.mdx?$/, ''),
      ...(data as { date: string; title: string }),
    }
  })

  return {
    props: {
      allPostsData,
    },
  }
}
