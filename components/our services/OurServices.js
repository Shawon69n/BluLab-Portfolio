import React, { useState } from 'react'
import { Accordion } from './Accordion/Accordion'
import styles from './OurService.module.css'
export const OurServices = () => {

  return (
    <div>
        {/* our service section 1 */}
        <h1 className={styles.ServiceText}>Our Service</h1>
        <div className={styles.hrTag}></div>
            <ul className={styles.links}>
                <li><a href="index.html">All</a></li>
                <li><a href="contact.html">Design</a></li>
                <li><a href="about.html">Develop</a></li>
                <li><a href="hire.html">UI / UX</a></li>
            </ul>
        {/* our service section 2 */}
        <Accordion/>
    </div>
    
  )
}
