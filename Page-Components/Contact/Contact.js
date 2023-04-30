import React from 'react';
import styles from './Contact.module.css'
import { MdCall } from 'react-icons/md';
import { TfiEmail } from 'react-icons/tfi';
import { TbSocial} from 'react-icons/tb';
import Navbar from '@/components/navbar/Navbar';
import { Footer } from '@/components/Footer/Footer';
import { EndSection } from '@/components/End section/EndSection';
const Contact = () => {
    return (
        <div className={styles.main}>
            <Navbar/>
            <h1 className={styles.ContactTxT}>Contact</h1>
            <p className={styles.contactPara}>Contact us to turn your mobile app ideas into reality. Our <br /> expert 
                team of designers and developers will work with <br /> you every 
                step of the way to create custom mobile apps <br /> tailored to your
                 business needs. Let's build something <br /> great together. Get in touch with
                 us today!
           </p>

           <div className={styles.socialContainer}>
             <div>
                <MdCall className={styles.socialIcons}/>
                    <h1 className={styles.socialTxt}>Phone</h1>
                    <h3 className={styles.SocialLink}>Whatsapp: 01234-532123</h3>
                    <h3 className={styles.SocialLink} >Contact #1: 01324-241332</h3>
                    <h3 className={styles.SocialLink}>Contact #2: 01534-253412</h3>
             </div>
             <div>
                <TfiEmail className={styles.socialIcons}/>
                <h1 className={styles.socialTxt}>Email</h1>
                <h3 className={styles.SocialLink}>blulabdev@gmail.com</h3>
                <h3 className={styles.SocialLink}>blulabdevbus@gmail.com</h3>
             </div>
             <div>
                <TbSocial className={styles.socialIcons}/>
                <h1 className={styles.socialTxt}>Social</h1>
                <h3 className={styles.SocialLink}>Facebook: Blu Lab</h3>
                <h3 className={styles.SocialLink}>Instagram: Blu Lab</h3>
                <h3 className={styles.SocialLink}>Printrest: Blu Lab</h3>
                <h3 className={styles.SocialLink}>Linkedin: Blu Lab</h3>
             </div>
           </div>
        </div>
    );
};

export default Contact;