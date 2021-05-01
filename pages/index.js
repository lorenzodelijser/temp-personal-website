import Head from 'next/head'

// Components
import Icon from '../src/components/atoms/Icon'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Lorenzo de Lijser</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><text x='0' y='14'>👋</text></svg>"
        />
      </Head>

      <nav>
        <ul>
          <li>
            <a href="#">
              Home
            </a>
          </li>
          <li>
            <a href="#">
              About
            </a>
          </li>
          <li>
            <a href="#">
              Projects
            </a>
          </li>
          <li>
            <a href="#">
              Contact
            </a>
          </li>
        </ul>
      </nav>

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
        <div className="old-portfolio-link">
          <p>You can still visit my old website at: <a href="https://old.lorenzodelijser.com/">old.lorenzodelijser.com</a>.</p>
        </div>
      </main>
    </div>
  )
}
