import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/navbar/Navbar'
import Hero from '@/components/hero/Hero'
import { OurServices } from '@/components/our services/OurServices'
import { OurWorks } from '@/components/our works/OurWorks'
import { EndSection } from '@/components/End section/EndSection'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
        <Navbar/>
        <Hero/>
        <OurServices/>
        <OurWorks/>
        <EndSection/>
      </main>
    </>
  )
}
