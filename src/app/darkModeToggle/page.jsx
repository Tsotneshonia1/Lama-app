"use client";

import React, { useState } from "react";
import styles from "./darkModeToggle.module.css";

function DarkMode() {
  const [light, setLight] = useState("left");

  return (
    <main
      className={styles.container}
      onClick={() => {
        if (light === "left") {
          setLight("right");
        }
        else{
          setLight("left")
        }
      }}
    >
      <div className={styles.icon}> 🔆</div>
      <div className={styles.icon}>🌙</div>
      <div
        className={styles.ball}
        style={light === "right" ? { right: "2px" } : { left: "2px" }}
      />
    </main>
  );
}

export default DarkMode;
