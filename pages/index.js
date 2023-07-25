import Head from "next/head";
import Header from "../sections/Header.js";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { useState } from "react";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h3>
          <a href="https://www.linkedin.com/in/cooper-reed/">Linkedin</a>| |
          <a href="https://github.com/cooperability">GitHub</a>| |
          <a href="https://twitter.com/Cooperability">Twitter</a>| |
          <a href="https://mirror.xyz/0xAd7f62080c882D575DCd6F5eb29cB9C09B0d4B0D">
            Mirror
          </a>
          | |<a href="https://www.youtube.com/channel/cooperability">YouTube</a>
        </h3>
      </section>
      <section className={utilStyles.headingMd}>
        <p>
          <b>Hi, I'm Cooper!</b> I’ve been creating and teaching software for
          six years, music for five, blockchain for three, and NLP for two.
          <br />
          <br />
          Finding <b>Co-Operability</b> means striving for long-term synergy
          between our ambitions and our morals. For me, that means open-sourcing
          all my projects and turning my hours into free education for others.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>History of Co-Operability</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
