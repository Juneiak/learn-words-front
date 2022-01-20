import React from "react";
import styles from './word-card.module.css';
import { DeleteIcon } from "../icons";
import ProgressBar from "../progress-bar/progress-bar";
import { ArrowIcon } from "../icons";

function WordCard({ data }) {
  
  return (
    <article className={styles.card}>
      <img className={styles.image} src={data.imageUrl} />
      <div className={styles.translateContainer}>
        <span className={styles.word}>{data.word}</span>
        <ArrowIcon />
        <span className={`${styles.word} text-caption`}>{data.translation}</span>
      </div>
      <div className={styles.icon}><DeleteIcon /></div>
      <div className={styles.progressBar}><ProgressBar progress={50}/></div>
    </article>
  )
}

export default WordCard;
