import React from "react";
import styles from "./id.module.css";
import Image from "next/image";



function SinglePostPage() {
  return (
    <main className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/spider.png" alt="" fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            src="/noavatar.png"
            alt=""
           
            className={styles.avatar}
            width={50}
            height={50}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Terry Jefferson</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>02.25.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Necessitatibus explicabo natus aliquid, officia sapiente vitae ab
          minus blanditiis laborum aperiam tempore alias perferendis. Delectus
          quos sunt maxime illo ad saepe!
        </div>
      </div>
    </main>
  );
}

export default SinglePostPage;
