import React from "react";
import styles from "./postCard.module.css";
import Image from "next/image";
import Link from "next/link";

function PostCard() {
  return (
    <main className={styles.container}>
      <div className={styles.top}></div>
      <div className={styles.imgContainer}>
        <Image src="" alt="" fill className={styles.img} />
      </div>
      <span className={styles.date}>02.22.2024</span>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>Desc</p>
        <Link href="./spider.png">Read more</Link>
      </div>
    </main>
  );
}

export default PostCard;
