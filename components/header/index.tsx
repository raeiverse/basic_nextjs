import Link from 'next/link'
import React from 'react'
import styles from '../../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.item}><Link href ="/">Homepage</Link></li>
        <li className={styles.item}><Link href ="/users">Userpage</Link></li>
        <li className={styles.item}><Link href ="/blog">Blogpage</Link></li>
        <li className={styles.item}><Link href ="/about">About</Link></li>
      </ul>
    </header>
  )
}
