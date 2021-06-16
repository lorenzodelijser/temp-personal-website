import Link from 'next/link'

// Styles
import Styles from './MenuBar.module.scss'

const MenuBar = () => (
    <nav className={Styles.MenuBar}>
        <ul>
            <li>
                <Link href="/">
                    <a>
                        Home
                    </a>
                </Link>
            </li>
            <li>
                <Link href="/about">
                    <a>
                        About
                    </a>
                </Link>
            </li>
            <li>
                <Link href="/projects">
                    <a>
                        Projects
                    </a>
                </Link>
            </li>
            <li>
                <Link href="/contact">
                    <a>
                        Contact
                    </a>
                </Link>
            </li>
        </ul>
    </nav>
)

export default MenuBar
