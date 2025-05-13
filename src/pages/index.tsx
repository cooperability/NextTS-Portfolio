/* eslint-disable no-useless-escape */
'use client'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/utils.module.css'
import { ArrowPathIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import { useState } from 'react'
import { ReactElement } from 'react'
import React from 'react'

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
  '"If I feed the poor they call me a Saint, if I ask why the poor have no food they call me a communist." -Hélder Câmara',
  '"At the end of the day, we have an economy that works for the rich by cheating the poor, and unequal schools are the result of that, not the cause." -Aaron Swartz',
  '"Humor as a system of communications, and as a probe of our environment - of what\'s really going on - affords us our most appealing anti-environmental tool. It does not deal in theory but in immediate experience, and is often the best guide in changing perceptions." -Marshall McLuhan, "The Medium is the Message" ',
  "\"I always say it's algebra, comedy. It's not art, it's science. If I wear this, and I say this, they will laugh. It's provable.\" -Eric Idle",
  "\"I've come up with a set of rules that describe our reactions to technologies: \n Anything that is in the world when you're born is normal and ordinary and is just a natural part of the way the world works. \n Anything that's invented between when you're fifteen and thirty-five is new and exciting and revolutionary and you can probably get a career in it. \n Anything invented after you're thirty-five is against the natural order of things.\" -Douglas Adams",
  '"We are what we pretend to be, so we must be careful about what we pretend to be." -Kurt Vonnegut',
  '"The only way to deal with the future is to be really present." -Alan Watts',
  '“There are decades where nothing happens; and there are weeks where decades happen.” – Vladimir Ilyich Lenin',
  '"We don\'t hope. We plan." -Reverend Mother Mohian, Dune',
  '"Risk is what\'s left over when you think you\'ve thought of everything." - Carl Richards, The Behavior Gap',
  '"Pride is not the opposite of shame, but its source. True humility is the only antidote to shame." - Uncle Iroh, Avatar: The Last Airbender',
  '"Masculine means you go to work, you support your family, you help out your neighbors – that\’s masculine, that\’s machismo. We got it screwed up, thinking we\’re supposed to be warriors. No, we\’re not, we\’re supposed to be caretakers." -Danny Trejo',
  '"We judge ourselves by what we feel capable of doing, while others judge us by what we have already done." -Henry Wadsworth Longfellow',
  '"In a world where the big fish eat small fish and the small fish eat shrimps, Singapore must become a poisonous shrimp." -Lee Kuan Yew',
  '"No matter how far you have gone down a wrong road, turn back." -Turkish Proverb',
  '"It is impossible for a man to learn what he thinks he already knows." -Epictetus',
]

export default function Home() {
  const [quote, setQuote] = useState(
    quotes[Math.floor(Math.random() * quotes.length)]
  )
  return (
    <React.Fragment>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={styles.headingMd}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            marginTop: '20px',
          }}
        >
          <Image
            priority
            src="/images/profile.jpg"
            className={styles.borderCircle}
            height={150}
            width={150}
            alt="Cooper Reed"
          />
        </div>
        <p>
          Hi, I&apos;m <b>Cooper!</b> I&nbsp;
          <a href="https://github.com/cooperability">code</a>
          ,&nbsp;
          <a href="https://cooperability.substack.com/">write</a>, and&nbsp;
          <a href="https://www.youtube.com/@cooperability">interview</a>
          .
          <br />
          To me, <b>Co-Operability</b> means long-term synergy between my
          ambitions and morals. I open-source my work and learning as resources
          for others. My interviews follow this theme.
          <br />
        </p>
        <div className={styles.socialIconRow}>
          <b>A random quote that speaks to me:</b>
          <button
            className={styles.themeToggleBtn}
            onClick={() =>
              setQuote(quotes[Math.floor(Math.random() * quotes.length)])
            }
          >
            <ArrowPathIcon />
          </button>
        </div>
        <span suppressHydrationWarning>{quote}</span>
      </section>
    </React.Fragment>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout home>{page}</Layout>
}
