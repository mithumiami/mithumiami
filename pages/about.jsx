import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/About.module.css'
import styled from "styled-components";

function About() {
    return (
    <div className={styles.container}>
        <div className={styles.title}>ABOUT</div>
        <div className={styles.imagebox}>
            <Image 
                className={styles.image}
                src="/about_image.jpg"
                alt="top_image"
                width={1000}
                height= {500}
                objectFit= "contain"
                // layout="fill"
            />
        </div>
    </div>
    )
   }
   
   export default About