import Head from 'next/head'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lorenzo de Lijser</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Title of this page</h1>
        <p>Dit wordt de home pagina van mijn website.</p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://twitter.com/lorenzodelijser"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        <a
          href="https://github.com/lorenzodelijser"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </footer>
    </div>
  )
}
