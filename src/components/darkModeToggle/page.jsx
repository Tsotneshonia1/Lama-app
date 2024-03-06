import React from "react";
import styles from "./darkModeToggle.module.css";

function DarkMode() {
  return (
    <main className={styles.container}>
      <div className={styles.icon}> 🔆</div>
      <div className={styles.icon}>🌙</div>
      <div className={styles.ball} />
    </main>
  );
}

export default DarkMode;
