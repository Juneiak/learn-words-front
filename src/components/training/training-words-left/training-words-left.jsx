import React from "react";
import styles from './training-words-left.module.css';

function TrainingWordsLeft({ wordNumber }) {

  return (
    <span className={`${styles.wordsLeft} text-h3`}>
      {`words to learn: ${wordNumber || 0}`}
    </span>
  )
}

export default TrainingWordsLeft;
