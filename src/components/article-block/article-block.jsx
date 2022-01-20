import React from "react";
import styles from './article-block.module.css';

function ArticleBlock({ title, text, image }) {

    return (
      <article className={styles.article}>
        <h2 className={`${styles.title} text-h2`}>{title}</h2>
        <p className={`${styles.text} text-body`}>{text}</p>
        {image && <img className={styles.image} src={image} alt='article image' />}
      </article>
    )
}

export default ArticleBlock;
