import Head from 'next/head'
import Link from 'next/link'

// Components
import Icon from '../src/components/atoms/Icon'
// import MenuBar from '../src/components/atoms/MenuBar'

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

      {/* <MenuBar /> */}

      <main>
        <h1>This is my about page</h1>
        <p>There is nothing to see here yet, feel free to checkout my to visit my social profiles.</p>
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
            <Link href="/">
                <a>
                    <button>
                        Return to Home
                    </button>
                </a>
            </Link>
        </div>
      </main>
    </div>
  )
}
