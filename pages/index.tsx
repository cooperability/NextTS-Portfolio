import Head from "next/head";
import Header from "../sections/Header.js";
import Layout, { siteTitle } from "../components/layout.jsx";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts.js";
import Link from "next/link";
import Date from "../components/date.js";
import Image from "next/image";
import { useState } from "react";

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

export function getRandomQuote(){
  const quotes = [
  `"You cannot teach a man anything, you can only help him to find it within himself." \n -Galileo`,
  `"A man who procrastinates in his choosing will inevitably have his choice made for him by circumstance." \n -Hunter S. Thompson`,
  `"The future rewards those who press on. I don\'t have time to feel sorry for myself. I don\'t have time to complain. I\'m going to press on." \n -Barack Obama`,
  '"This is precisely the time when artists go to work. There is no time for despair, no place for self-pity, no need for silence, no room for fear... Like failure, chaos contains information that can lead to knowledge - even wisdom." \n -Toni Morrison',
  '"To me, fun is any time I feel like I really display or I really reach my full potential. When the glass ceiling breaks. That\'s f****** fun for me." \n -Miley Cyrus',
  '"If you can create different experiences that manifest different desires, then it\'s possible that those will lead to the production of different worlds.” \n -Moxie Marlinspike',
  '"The fact is that no man is a datum which is passively suffered; the rejection of existence is still another way of existing; nobody can know the peace of the tomb while he is alive." -Simone de Beauvoir',
  '"Honestly, I just kind of wing it" -Sun Tzu',
  '"You can hold yourself back from the sufferings of the world, that is something you are free to do and it accords with your nature, but perhaps this very holding back is the one suffering you could avoid." -Franz Kafka',
  '"I always said I\'d never stoop so low as to be fashionable...it\'s too easy." - Dolly Parton',
  '"If I feed the poor they call me a Saint, if I ask why the poor have no food they call me a communist." -Hélder Câmara'
  ]
  return quotes[Math.floor(Math.random()*quotes.length)].toString();
}
