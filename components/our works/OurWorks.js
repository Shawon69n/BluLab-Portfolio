import React from 'react'
import styles from './OurWork.module.css'
export const OurWorks = () => {
  return (
    <div className={styles.MainContainer}>
         <h1 className={styles.OurWorksTxt}>OUR WORKS</h1>
         <div className={styles.container}>
            <div>
                <h1  className={styles.heroTxt}>We Build Apps For All Clients <br /> From Established Business to <br /> Startups, We Build Them All </h1></div>
                <div className={styles.review}>
                <h1 className={styles.heroTxt1}>“They Never Fail <br /> To Impress Me” <br /> <span className={styles.stars}>★★★★★</span></h1>
            </div>
          </div> 
    </div>
  )
}
