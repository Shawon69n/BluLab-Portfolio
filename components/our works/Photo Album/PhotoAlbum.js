import Image from 'next/image'
import React from 'react'
import styles from './PhotoAlbum.module.css'
import photo1 from '../../../assets/photoAlbum1.jpg'
import photo2 from '../../../assets/photoAlbum2.png'
import photo3 from '../../../assets/photoAlbum3.jpg'
import photo4 from '../../../assets/photoAlbum4.jpg'
export const PhotoAlbum = () => {
  return (
    <div className={styles.mainContainer}>
  <div className={styles.masonaryContainer}>
    <Image style={{borderRadius:'30px'}} width={639} height={304}  src='https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHdlYnNpdGUlMjBtb2NrdXB8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' alt="" />
    <Image style={{borderRadius:'50px' , marginLeft:'40px'}} width={298} height={304}  src={photo2} alt="" />
    <Image style={{borderRadius:'50px' , marginLeft:'40px'}} width={299} height={304}  src='https://images.unsplash.com/photo-1556155092-8707de31f9c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fG1vYmlsZSUyMHNjcmVlbiUyMG1vY2t1cHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt="" />
   </div>

  <div className={styles.masonaryContainer2}>
    <Image style={{borderRadius:'30px'}} width={300} height={304}  src={photo4} alt="" />
    <Image style={{borderRadius:'50px' , marginLeft:'40px'}} width={412} height={304}  src={photo3} alt="" />
    <Image style={{borderRadius:'50px' , marginLeft:'40px'}} width={413} height={304}  src={photo4} alt="" />
    <div style={{borderRadius:'50px' , marginLeft:'40px' , height:'304px',width:'71px', background:'gray'}}></div>
   </div>
   </div>
  )
}
