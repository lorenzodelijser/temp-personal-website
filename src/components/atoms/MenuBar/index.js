import Link from 'next/link'

// Styles
import Styles from './MenuBar.module.scss'

const MenuBar = () => (
    <nav className={Styles.menubar}>
        <ul>
            <li>
                <Link href="/">
                    <a>
                        <button>Home</button>
                    </a>
                </Link>
            </li>
            <li>
                <Link href="/about">
                    <a>
                        <button>About</button>
                    </a>
                </Link>
            </li>
            <li>
                <Link href="/projects">
                    <a>
                        <button>Projects</button>
                    </a>
                </Link>
            </li>
            <li>
                <Link href="/contact">
                    <a>
                        <button>Contact</button>
                    </a>
                </Link>
            </li>
        </ul>
    </nav>
)

export default MenuBar
