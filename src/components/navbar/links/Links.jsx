"use client";

import Link from "next/link";
import React, { useState } from "react";
import styles from "./links.module.css";
import Image from "next/image";
import DarkMode from "@/app/darkModeToggle/page";

const links = [
  {
    title: "Homepage",
    url: "/",
  },

  {
    title: "About",
    url: "/about",
  },
  {
    title: "Contact",
    url: "/contact",
  },

  {
    title: "Blog",
    url: "/blog",
  },
];
function Links() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <Link href={link.url}>{link.title}</Link>
        ))}
        <button className={styles.logout}>Logout</button>
      </div>
       {/* <button
        className={styles.menuButton}
        onClick={() => setOpen((prev) => !prev)}
       ></button> */}
       <DarkMode/>
       <Image
        className={styles.menuButton}
        src="/menu.png"
        alt=""
        width={30}
        height={30}
        onClick={() => setOpen((prev) => !prev)}
       />
       {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <Link href={link.url}>{link.title}</Link>
          ))}
        </div>
       )}
    
    </div>
  );
}

export default Links;
