import Link from 'next/link'

// Components
import Icon from '../src/components/atoms/Icon'

export default function Home() {
  return (
    <div className="container">
      <main>
        <h1>This is my card page</h1>
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
