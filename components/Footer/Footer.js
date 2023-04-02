import React from 'react'
import styles from './footer.module.css'
export const Footer = () => {
  return (
    <div className={styles.footer}>
       <div className={styles.footerTxtBox}>
            <h1 className={styles.FooterTxt}>PRIVACY POLICY</h1>
            <h1 className={styles.FooterTxt}>COPYRIGHT BLULAB 2023. ALL RIGHTS RESERVED.</h1>
            <h1 className={styles.FooterTxt}>TERMS OF SALE</h1>
       </div>
    </div>
  )
}
