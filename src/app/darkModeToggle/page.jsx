"use client";

import React, { useContext, useState } from "react";
import styles from "./darkModeToggle.module.css";
import { ThemeContext } from "@/components/context/ThemeContext";


function DarkMode() {
 const {mode, toggle} = useContext(ThemeContext);
 


  return (
    <main className={styles.container}  onClick={toggle}> 
      <div className={styles.icon}> 🔆</div>
      <div className={styles.icon}>🌙</div>
      <div
        className={styles.ball}
        style={mode === "dark" ? {left: "2px"} : {right: "2px"}}
      />
    </main>
  );
}

export default DarkMode;
