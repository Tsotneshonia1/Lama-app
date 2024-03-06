import React from "react";
import styles from "./postCard.module.css";
import Image from "next/image";
import Link from "next/link";

function PostCard({post}) {
  return (
    <main className={styles.container}>
      <div className={styles.top}>
      <div className={styles.imgContainer}>
        <Image src="/spider.jpg" alt="" fill className={styles.img} />
      </div>
      <span className={styles.date}>02.22.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.body}</p>
        <Link className={styles.link}  href={'/blog/${post.id}'}>Read more</Link>
      </div>
    </main>
  );
}

export default PostCard;