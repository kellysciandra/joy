import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        I am the god Joy 
        </h1>

        <p className={styles.description}>
         I have 2 dog Richard and I like boobie
        </p>


      </main>

      <footer>

          <img src="/big.jpg" alt="Vercel Logo" className={styles.logo} />
          <img src="/small.jpg" alt="Vercel Logo" className={styles.logo2} />
    
      </footer>
    </div>
  )
}
