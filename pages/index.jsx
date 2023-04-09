import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import MenuIcon from '@mui/icons-material/Menu';
import styles from '@/styles/Home.module.css'
import styled from "styled-components";

const inter = Inter({ subsets: ['latin'] })
// const StyledWrapper = styled.div`
// .about
// `

export default function Home() {
  return (
    <>
      <Head>
        <title>MITHUAMI</title>
        <meta name="description" content="PORTFOLIO OF MITHUAMI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <main className={styles.main}> */}
        {/* <div className={styles.description}> */}
          <div className={styles.container}>
              <Image
                src="/top_image.jpg"
                alt="top_image"
                // className={styles.vercelLogo}
                layout="fill"
                // width="100%"
                // height={24}
                // priority
              />
              <div className={styles.title}>
                <Link href="/">MITHUAMI</Link>
              </div>

              <div className={styles.about}>
                <Link href="/about">ABOUT</Link>
              </div>
              <div className={styles.profile}>
                <Link href="/profile">PROFILE</Link>
              </div>
              <div className={styles.gallery}>
                <Link href="/gallery">GALLERY</Link>
              </div>
              <div className={styles.contact}>
                <Link href="/contact">CONTACT</Link>
              </div>
          {/* </div> */}
        {/* </div> */}
       {/* </main> */}
      </div>
    </>
  )
}
// const StyledWrapper = styled.div`
// .about{
//   top:25px; 
// }
// `