import React, { Children, ReactNode } from 'react'
import Header from '../header'
import Footer from '../footer'
import styles from '../../styles/Layout.module.css'

interface LayoutProps{
    children: ReactNode;
    pageTitle: string;
}
export default function Layout(props: LayoutProps) {
    const { children, pageTitle } = props;
  return (
    <>
    <head>
      <title>Next Basic | {pageTitle}</title>
      <meta name="description" content="Website NextJS Basic" />
    </head>
    <div className={styles.container}>
        <Header/>
        <div className={styles.content}>{children}</div>
        <Footer/>
    </div>
    </>
  )
}
