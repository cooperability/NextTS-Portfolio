"use client"
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import styles from "../styles/utils.module.css";
import Image from "next/image";
import { useState } from "react";

const name = "Cooper Reed";
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
  '"I always said I\'d never stoop so low as to be fashionable...it\'s too easy." -Dolly Parton',
  '"If I feed the poor they call me a Saint, if I ask why the poor have no food they call me a communist." -Hélder Câmara',
  '"The universe is a big place, perhaps the biggest." -Kurt Vonnegut',
  '"I spent 15 years before I had any real, noticeable success...persistence is certainly something I think I can credit myself for having." -Harrison Ford',
  '"There\'s a notion I\'d like to see buried: the ordinary person. Ridiculous. There is no ordinary person." -Alan Moore, Watchmen',
  '"Life shrinks or expands in proportion to one\'s courage." -Anaïs Nin',
  '"At the end of the day, we can endure much more than we think we can." -Frida Kahlo',
  '"An experiental idea doesn\'t have to be separated from a mainstream context. The really exciting thing is where those two things are together. That\'s where you can get real change." -SOPHIE (RIP)',

]

export default function Home() {
  const [quote, setQuote] = useState(quotes[Math.floor(Math.random() * quotes.length)])
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
        </div>
        <p>
          <b>Hi, I'm Cooper!</b> I’ve been making software for
          six years, music five, web3 three, and NLP two.
          Here's my <a className="font-bold underline" href="https://drive.google.com/file/d/197fniv8a0-iVVzl_aiwSBl6NaFnTppnz/view?usp=sharing">resume.</a>
          <br />
          <br />
          To me, <b>Co-Operability</b> means long-term synergy
          between my ambitions and morals. For me, that means open-sourcing
          all my projects and turning my hours into free education for others.
          <br />
          <br />
        </p>
        <div className="flex justify-between">
          <b>A favorite quote:</b>
          <span>&nbsp;&nbsp;</span>
          <button
            className="py-1 px-1 rounded flex text-lg font-bold border-2 background"
            onClick={() => setQuote(quotes[Math.floor(Math.random() * quotes.length)])}
          >
            Randomize
          </button>
        </div>
        <span suppressHydrationWarning>
          {quote}
        </span>
      </section>
    </Layout>
  );
}