import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Layout from '@/components/layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    
    <Layout pageTitle='Home Page'>
    <h1 className={styles['title-homepage']}>Welcome Raeiverse</h1>
    <Image src={require('/public/a.png')} width={500}height={300} alt='profile'></Image>
    <Image src={require('/public/b.png')} width={500}height={300} alt='profile'></Image>
    </Layout>
    
  )
}
