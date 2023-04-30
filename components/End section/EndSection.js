import React from 'react'
import { BsFacebook ,BsPinterest,BsTwitter,BsLinkedin,BsInstagram} from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
import styles from './EndSection.module.css'
export const EndSection = () => {
  return (
    <div className={styles.MainContainer}>
        <h1  className={styles.heroTxt}>DO YOU HAVE ANY PROJECT <span style={{color:'#00C2FF'}}>PROJECT</span> <br />  IN MIND? DON'T WAIT ANY <br /> LONGER! <span style={{color:'#00C2FF'}}>CONTACT US</span> TODAY .</h1>

        <div className={styles.container}>
                  {/* left section  */}
                  <div>
                  {/* title text  */}
                    <h1 className={styles.inputLabel}>Join Our Newsletter</h1>
                  {/* input div  */}
                    <div className={styles.inputDiv}>
                        <input className={styles.input} type="text" placeholder='Email Address'/>
                        <input type="button" value="Submit" className={styles.inputBtn} />
                    </div>
                  {/* social div  */}
                    <div>
                      <BsFacebook className={styles.socialIcons}/>
                      <BsInstagram className={styles.socialIcons}/>
                      <BsPinterest className={styles.socialIcons}/>
                      <BsTwitter className={styles.socialIcons}/>
                      <BsLinkedin className={styles.socialIcons}/>
                    </div>
                  </div>
                

                  {/* center section */}
                  <h1 className={styles.BlulabTxt}> BluLab </h1>
                
                 
                  {/* right section  */}
                 <div >
                    <div>
                      <button className={styles.ConDissBtn}>Contact</button> 
                    </div>
                    <div>
                        <button className={styles.ConDissBtn}>Discuss</button> 
                    </div>
                 </div>
        </div>

    </div>
  )
}
