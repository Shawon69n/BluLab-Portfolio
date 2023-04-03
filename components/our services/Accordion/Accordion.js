import Image from 'next/image';
import React, { useState } from 'react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import styles from './accordion.module.css'
const dataCollection = [
  { id: '01',
    title: 'UI / UX Design',
    answer: 'Design Premium Quality Application UI And Build Your Dream Mobile Application ',
    url: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  }, {
    id: '02',
    title: 'App Development',
    answer: 'Fusce et imperdiet ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras ipsum erat, ullamcorper nec bibendum aliquam, commodo ac enim. In a aliquet enim, nec vehicula ligula. Aenean non magna sapien. Integer vel massa vulputate, varius nunc nec, malesuada arcu. ',
    url: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  }, {
    id: '03',
    title: 'Front-End Development',
    answer: 'Fusce et imperdiet ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras ipsum erat, ullamcorper nec bibendum aliquam, commodo ac enim. In a aliquet enim, nec vehicula ligula. Aenean non magna sapien. Integer vel massa vulputate, varius nunc nec, malesuada arcu. ',
    url: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  }, {
    id: '04',
    title: 'Android / IOS Development',
    answer: 'Fusce et imperdiet ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras ipsum erat, ullamcorper nec bibendum aliquam, commodo ac enim. In a aliquet enim, nec vehicula ligula. Aenean non magna sapien. Integer vel massa vulputate, varius nunc nec, malesuada arcu. ',
    url: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  }
];

export const Accordion = () => {
    const [accordion, setActiveAccordion] = useState(-1);
  
    function toggleAccordion(index) {
      if (index === accordion) {
        setActiveAccordion(-1);
        return
      }
      setActiveAccordion(index);
    };
  
    return (
      <>
        <div className={styles.container}>
          <div className={styles.accordion__faq}>
            { dataCollection.map((item, index) =>
                <div className={styles.HrTag} key={index} onClick={() => toggleAccordion(index)}>
                    {/* Title */}
                  <div className={styles.accordion__faqHeading}>
                    <h3 className={`${accordion === index ? styles.active : ''}`}><span className={styles.number}>{item.id}</span> {item.title}</h3>
                    <div>
                      {accordion === index ?
                        <span>-</span> : <span><BsFillArrowRightCircleFill/></span>}
                    </div>
                  </div>
                      {/* body   */}
        
                     <div className={`${accordion === index ? styles.active : styles.inactive}`} >
                        <div className={styles.accordionBody}>
                            <Image style={{borderRadius:'50px'}} width={535} height={272}  src={item.url} alt="" />
                            <p>{item.answer}</p>
                        </div>
                     </div>
                  

                </div>
              )
            }
          </div>
        </div>
      </>
    );
  }
