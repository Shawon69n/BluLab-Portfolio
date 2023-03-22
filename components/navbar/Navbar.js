import React from 'react'
import styles from'./navbar.module.css'
import { Nav } from './Navbar.styles'
export default function Navbar() {
  return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <h1>BluLab</h1>
            </div>
            <ul className={styles.links}>
                <li><a href="index.html">Home</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="hire.html">Hire Us</a></li>
            </ul>
        </nav>   
  )
}
