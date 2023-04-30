import React from 'react';
import styles from './AboutUs.module.css'
import Navbar from '@/components/navbar/Navbar';
import Image from 'next/image';
const AboutUs = () => {
    return (
        <div className={styles.main}>
            <Navbar/>

            <div className={styles.container}>
                <div>
                    <h1 className={styles.MainTxt}>Helping Businesses Succeed <br /> Through The Power of <br /> Enhanced Development .</h1>
                    <p className={styles.subTxt}>Build Your Dream Project Today <br /> 
                    With Our Expert Developers .We Are Here to Make Your Vision <br /> 
                    Come to Reality . We Are Ready To Build Your Project. Contact Us <br /> Today !
                    </p>
                    <button className={styles.heroBtn}>Contact us</button> 
                </div>
                <Image style={{borderRadius:'10px'}} width={535} height={372}  src='https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt="" />
            </div>

        </div>
    );
};

export default AboutUs;