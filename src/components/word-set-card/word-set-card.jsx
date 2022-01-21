import React from "react";
import styles from './word-set-card.module.css';

function WordSetCard({ title, imageUrl }) {

    return (
      <article
          className={styles.card}
          style={{backgroundImage: `url(${imageUrl})`}}>
        <span className={styles.title}>{title}</span>
      </article>
    )
}

export default WordSetCard;
