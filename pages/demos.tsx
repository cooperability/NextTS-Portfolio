import Layout from "../components/layout";
import Link from 'next/link';
import Image from "next/image";
import styles from "../styles/utils.module.css";

const Skills: React.FC = () => {
    return (
        <Layout home>
            <section className={styles.headingMd}>
                <p>
                    Click to view (desktop optimized)
                </p>
                I'm currently working on <u><b><a href="https://github.com/cooperability/BMX-bookmark-extractor">BMX, the BookMark eXtractor</a></b></u>
                , a user-friendly pipeline for ingesting data from the web into AI models. Here's one component:
                <Image
                    priority
                    src="/images/BMX.gif"
                    height={2530}
                    width={1656}
                    alt={"BookMark eXtractor V2"}
                />
                Built with Typescript-Django-Postgres via Railway.
                <br />
                Scraping by BeautifulSoup, Scrapy integrations soon.
                <br />
                <div className={styles.horizLine}></div>

                <Link href="https://opioidconverter.vercel.app">
                    <div className="hover:cursor-pointer flex:horizontal justify-center items-center">
                        <Image
                            src="/images/demooc.png"
                            alt="converter"
                            width="1656"
                            height="2530" />
                    </div>
                </Link>
                <Link href="https://opioid-converter.vercel.app">Opioid Converter (Typescript + CSS + Vercel)</Link>
            </section>
        </Layout>
    );
};

export default Skills;