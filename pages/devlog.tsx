import Link from "next/link";
import Date from "../components/date";
import utilStyles from "../styles/utils.module.css";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";

export default function DevLog({ allPostsData }) {
    return (
        <Layout home>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Dev Log</h2>
                <ul className={utilStyles.list}>
                    {allPostsData?.map(({ id, date, title }) => (
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

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}