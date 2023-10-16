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
                <div className={styles.horizLine}></div>

                <Link href="https://www.imdb.com/name/nm5343773/">
                    <div className="hover:cursor-pointer flex:horizontal justify-center items-center">
                        <Image
                            src="/images/demooc.png"
                            alt="IMDb"
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