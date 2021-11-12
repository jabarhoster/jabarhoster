import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Web Hosting Indonesia Terbaik, Murah & Unlimited - Jabarhoster</title>
        <meta name="Web hosting terbaik di Indonesia dengan fitur keamanan &amp; kecepatan untuk website yang optimal." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Selamat datang di <a href="https://jabarhoster.com">Jabarhoster.com!</a>
        </h1>

      </main>

    </div>
  )
}

export default Home
