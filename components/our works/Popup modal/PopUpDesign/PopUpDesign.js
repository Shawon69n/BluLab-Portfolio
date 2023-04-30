import React from 'react'
import styles from './PopUpDesign.module.css'
import photo4 from '../../../../assets/photoAlbum4.jpg'
import { RxCross1} from 'react-icons/rx'
import Image from 'next/image'
export const PopUpDesign = ({setShowModal}) => {
  
  return (
    <div className={styles.mainContainer}>
      <RxCross1 onClick={()=> setShowModal(false)} className={styles.Cross}/>
          <div className={styles.subContainer}>
          <Image width={1318} height={322}  src={photo4} alt="" />
            <div className={styles.flexContainer}>
                <div className={styles.HeroTxt}>
                    <h1 className={styles.TitleTxt}>Title</h1>
                    <h3 className={styles.descriptonTxt}>Project #abc 123</h3>
                    <h1 className={styles.TitleTxt}>Description</h1>
                    <p className={styles.descriptonTxt}>Lorem ipsum dolor sit amet consectetur. Pharetra id elit gravida nisl at risus mauris. 
                        Porta sapien dolor in tellus. Placerat nullam habitant diam integer dolor.
                        Scelerisque non mattis.
                    </p>
                </div>
                    <div className={styles.HeroImg}>
                    <Image  style={{borderRadius:'30px'}} width={262} height={151}  src='https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHdlYnNpdGUlMjBtb2NrdXB8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' alt="" />
                    <Image style={{borderRadius:'50px' , marginLeft:'40px'}} width={186} height={149}  src={photo4} alt="" />
                    <Image style={{borderRadius:'50px', marginTop:'20px'}} width={489} height={149}  src={photo4} alt="" />
                    </div>
            </div>
          </div>
    </div>
  )
}
