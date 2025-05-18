import Head from 'next/head'
import styles from '../styles/utils.module.css'
import Providers from './providers'
import Header from '../sections/Header'
import Footer from '../sections/Footer'

export const siteTitle = 'Cooper Reed | Co-Operability'

export default function Layout({
  children,
}: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <div className={styles.container}>
      <Header />
      <Providers>
        <Head>
          <html lang="en" />
          <title>Cooper Reed | Co-Operability</title>
          <link rel="icon" type="image/ico" href="/icon.ico" />
          <meta name="og:title" content={siteTitle} />
          <meta name="description" content="Cooper's portfolio website" />
        </Head>
        <main>{children}</main>
      </Providers>
      <Footer />
    </div>
  )
}
