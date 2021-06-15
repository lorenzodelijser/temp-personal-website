import * as React from 'react'

// Styles
import Styles from './MenuBar.module.scss'

const MenuBar = () => (
    <nav className={Styles.MenuBar}>
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
)

export default MenuBar
