import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Lorenzo de Lijser</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Title of this page</h1>
        <p>This will become the homepage of my personal space on the internet.</p>
      </main>

      <footer>
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
