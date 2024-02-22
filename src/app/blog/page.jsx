import React from "react";
import styles from "./blog.module.css";
import PostCard from "@/components/postCard/postCard";

function BlogPage() {
  return <div className={styles.container}>
    <div className={styles.post}>
    <PostCard/>
    <PostCard/>
    <PostCard/>
    <PostCard/>
    </div>
  </div>;
}

export default BlogPage;
