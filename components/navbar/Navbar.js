import React from 'react'
import styles from'./navbar.module.css'
import { Nav } from './Navbar.styles'
export default function Navbar() {
  return (
        <Nav className={styles.nav}>
            <div className={styles.logo}>
                <h1>BluLab</h1>
            </div>
            <ul className={styles.links}>
                <li><a href="/">Home</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/aboutus">About Us</a></li>
                <li><a href="/hireus">Hire Us</a></li>
            </ul>
        </Nav>   
  )
}
