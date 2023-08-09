import Head from "next/head";
import Header from "../sections/Header";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts.js";
import Link from "next/link";
import Date from "../components/date.js";
import Image from "next/image";
import { useState } from "react";
import getRandomQuote from "./quote";

export default function Home({ allPostsData, randomQ }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <div className="flex flex-row justify-between">
          <Link href="https://www.linkedin.com/in/cooper-reed/">
            <div className="hover:cursor-pointer">
              <Image
                src="/images/Linkedin.png"
                alt="LinkedIn"
                width="50"
                height="50"
              />
            </div>
          </Link>
          <Link href="https://github.com/cooperability">
            <div className="hover:cursor-pointer flex:horizontal justify-center items-center">
              <Image
                src="/images/Github.png"
                alt="GitHub"
                width="50"
                height="50"
              />
            </div>
          </Link>
          <Link href="https://twitter.com/Cooperability">
            <div className="hover:cursor-pointer flex:horizontal justify-center items-center">
              <Image
                src="/images/Twitter.png"
                alt="Twitter"
                width="50"
                height="50"
              />
            </div>
          </Link>
          <Link href="https://mirror.xyz/0xAd7f62080c882D575DCd6F5eb29cB9C09B0d4B0D">
            <div className="hover:cursor-pointer flex:horizontal justify-center items-center">
              <Image
                src="/images/Mirror.jpeg"
                alt="Mirror"
                width="50"
                height="50"
              />
            </div>
          </Link>
          <Link href="https://www.youtube.com/channel/cooperability">
            <div className="hover:cursor-pointer flex:horizontal justify-center items-center">
              <Image
                src="/images/Youtube.png"
                alt="Youtube"
                width="50"
                height="50"
              />
            </div>
          </Link>
          <Link href="https://www.imdb.com/name/nm5343773/">
            <div className="hover:cursor-pointer flex:horizontal justify-center items-center">
              <Image src="/images/IMDb.png" alt="IMDb" width="50" height="50" />
            </div>
          </Link>
        </div>
      </section>
      <section className={utilStyles.headingMd}>
        <p>
          <br />
          <b>Hi, I'm Cooper!</b> I’ve been creating and teaching software for
          six years, music for five, blockchain for three, and NLP for two.
          <br />
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
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Dev Log</h2>
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
      randomQ:getRandomQuote(),
    },
  };
}