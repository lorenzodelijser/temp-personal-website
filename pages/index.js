import Head from 'next/head'

// Components
import Icon from '../src/components/atoms/Icon'
import MenuBar from '../src/components/atoms/MenuBar'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Lorenzo de Lijser</title>

        <meta name="apple-mobile-web-app-title" content="Lorenzo" />
        <meta name="description" content="Website of Lorenzo de Lijser" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        <link rel="shortcut icon" type="image/png" href="/images/favicon-180.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon-180.png" />
      </Head>

      <MenuBar />

      <main>
        <h1>Lorenzo de Lijser</h1>
        <p>A new website is in progress, for the meanwhile you can visit my social profiles.</p>
        <div className="social-links">
          <a href="https://twitter.com/lorenzodelijser">
            <Icon name="twitter" />
          </a>
          <a href="https://www.linkedin.com/in/lorenzodelijser/">
            <Icon name="linkedin" />
          </a>
          <a href="https://github.com/lorenzodelijser">
            <Icon name="github" />
          </a>
          <a href="https://dribbble.com/lorenzodelijser">
            <Icon name="dribbble" />
          </a>
        </div>
        <div className="sub-section">
          <p>You can still visit my old website at: <a href="https://old.lorenzodelijser.com/">old.lorenzodelijser.com</a>.</p>
        </div>
      </main>
    </div>
  )
}
