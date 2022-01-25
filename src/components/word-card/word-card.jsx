import React from "react";
import styles from './word-card.module.css';
import { DeleteIcon, ArrowIcon, AddIcon } from "../icons";
import ProgressBar from "../progress-bar/progress-bar";

function WordCard({ data, isNew=true}) {
  
  return (
    <article className={styles.card}>
      <img className={styles.image} src={data.imageUrl} />
      <div className={styles.translateContainer}>
        <span className={styles.word}>{data.word}</span>
        <ArrowIcon />
        <span className={`${styles.word} text-caption`}>{data.translation}</span>
      </div>
      <div className={styles.icon}>
        {isNew ? <AddIcon size='big' constTheme='light' /> : <DeleteIcon />}
      </div>
      <div className={styles.progressBar}><ProgressBar progress={50}/></div>
    </article>
  )
}

export default WordCard;
