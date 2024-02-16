import Image from "next/image";
import React from "react";
import styles from "./about.module.css"

function About() {
  return (
    <main>
 <div className={styles.imgContainer}>
        <Image
          src="/about.png"
          alt="About Image"
          fill
          className={styles.img}
        />
      </div>
    </main>
  );
}

export default About;
