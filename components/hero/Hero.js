import Image from 'next/image'
import React from 'react'
import styles from'./Hero.module.css'
import { BsCheckLg } from 'react-icons/bs';
export default function () {
  return (
   
       <div>
        {/* hero section1 */}
          <div className={styles.container}>
            <h1  className={styles.heroTxt}>Build Your Dream Mobile Application <br /> With Our Team of <span style={{color:'#00C2FF'}}>Expert Developers</span></h1>
            <div className={styles.review}>
                <h1 className={styles.heroTxt1}>1,000+ User Reviews <br /> <span className={styles.stars}>★★★★★</span></h1>
            </div>
          </div> 
        {/* hero img section2 */}
         <div className={styles.container}>
            <img className={styles.heroImg} src="https://images.unsplash.com/photo-1522071901873-411886a10004?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
            <div className={styles.imgTxt}>
                <p>Welcome to our mobile app development company! We specialize in crafting high quality, user-friendly apps for iOS and Android devices. Our team of expert developers, designers, and project managers work closely with clients to understand their needs and create customized solutions that exceed expectations.</p> 
                <button className={styles.heroBtn}>Start Building</button> 
           </div>
           
         </div> 
        {/* hero section 3 */}
          <div className={styles.container}>
            <h1 className={styles.heroTxt1}><BsCheckLg className={styles.CheckIcon}/> Android + IOS</h1>
            <h1 className={styles.heroTxt1}><BsCheckLg className={styles.CheckIcon}/> App Development</h1>
            <h1 className={styles.heroTxt1}><BsCheckLg className={styles.CheckIcon}/> App Design</h1>
            <h1 className={styles.heroTxt1}><BsCheckLg className={styles.CheckIcon}/> UI / UX Design</h1>
          </div>

       </div>   
  )
}
