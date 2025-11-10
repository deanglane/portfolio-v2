import React from "react";
import styles from "./Blog.module.css";

function Blog() {
  return (
    <section className={styles.blog_section}>
      <div>Blog</div>
      <p>
        Welcome to my blog! Here you'll find articles on web development,
        design, and more.
      </p>
      <p>
        I want to write articles about my experiences and share my knowledge
        with others.
      </p>
      <p>
        As I learn new dev skills, I should write up a post about it with a
        small tutorial of how I achieved it.
      </p>
    </section>
  );
}

export default Blog;
