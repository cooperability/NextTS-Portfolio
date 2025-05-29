import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/utils.module.css'
import { ArrowPathIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import { useState } from 'react'
import { ReactElement } from 'react'
import React from 'react'
import { quotes, getRandomQuote } from '../lib/quotes'
import { GetServerSideProps } from 'next'

interface HomeProps {
  initialQuote: string
}

export default function Home({ initialQuote }: HomeProps) {
  const [quote, setQuote] = useState(initialQuote)

  return (
    <React.Fragment>
      <Head>
        <title>Cooper Reed | Co-Operability</title>
        <meta
          name="description"
          content="Cooper Reed's (Co-Operability) portfolio: Explore full-stack projects, writings, and interviews."
        />
      </Head>
      <h1 className="visually-hidden">
        Cooper Reed - Full Stack Developer Portfolio | Co-Operability
      </h1>
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
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
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
          ambitions and morals. I open-source my <Link href="/demos">work</Link>{' '}
          and <Link href="/resources">learning</Link> as resources for others.
          My interviews follow this theme.
        </p>
        <div className={styles.socialIconRow}>
          <b>This spoke to me:</b>
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

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  return {
    props: {
      initialQuote: getRandomQuote(),
    },
  }
}
