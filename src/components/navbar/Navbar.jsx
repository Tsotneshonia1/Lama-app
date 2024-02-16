import React from 'react';
import Link from "next/link";
import Links from "./links/Links";
import styles from  "./navbar.module.css"


function Navbar() {
  return (
    <main className={styles.container}>
      <Link  href="/" className={styles.logo}>Logo</Link>
      <div>
    <Links />
      </div>
    </main>
  )
}

export default Navbar