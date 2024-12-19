import Link from "next/link";
import Date from "../components/date";
import utilStyles from "../styles/utils.module.css";
import Layout, { siteTitle } from "../components/layout";
import { GetStaticProps } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';

interface PostData {
  id: string;
  date: string;
  title: string;
}

interface PromptsProps {
  allPostsData: PostData[];
}

export default function Prompts({ allPostsData }: PromptsProps) {
    return (
        <Layout home>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <ul className={utilStyles.list}>
                    {allPostsData?.map(({ id, date, title }: PostData) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link legacyBehavior href={`/posts/${id}`}>
                                <a>{title}</a>
                            </Link>
                            <span> </span>
                            <small className={utilStyles.lightText}>
                                <Date dateString={date} />
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    );
};

const POSTS_PATH = path.join(process.cwd(), 'posts');

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const fileNames = fs.readdirSync(POSTS_PATH);

    const allPostsData = fileNames.map((fileName) => {
      const fullPath = path.join(POSTS_PATH, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
  
      const { data } = matter(fileContents);
  
      return {
        id: fileName.replace(/\.mdx?$/, ''),
        ...(data as { date: string; title: string }),
      };
    });
  
    return {
      props: {
        allPostsData,
      },
    };
};

// export async function getStaticProps() {
//     const allPostsData = getSortedPostsData();
//     return {
//         props: {
//             allPostsData,
//         },
//     };
// }