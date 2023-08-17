import Head from "next/head";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import Layout, { siteTitle } from "../components/layout";
import styles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import getRandomQuote from "./quote";
import Image from "next/image";


const name = "Cooper Reed";

export default function Home({ allPostsData, randomQ }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={styles.headingMd}>
        <div style={{ display: 'flex', justifyContent: "space-evenly", marginTop: "20px" }}>
          <Image
            priority
            src="/images/profile.jpg"
            className={styles.borderCircle}
            height={150}
            width={150}
            alt={name}
          />
          <div><span> &nbsp;&nbsp;&nbsp;&nbsp;</span></div>
          <p><b>Hi, I'm Cooper!</b> I’ve been making software for
            six years, music five, web3 three, and NLP two.</p>
        </div>
        <p>
          <br />
          To me, <b>Co-Operability</b> means long-term synergy
          between my ambitions and morals. For me, that means open-sourcing
          all my projects and turning my hours into free education for others.
          <br />
          <br />
          <b>Here's a random quote that speaks to me:</b>
          <br />
          {randomQ}
        </p>
      </section>
      <Footer />
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
      randomQ: getRandomQuote(),
    },
  };
}