import React from "react";
import styles from './word-container.module.css';
import wordImageTest from '../../images/word-set-image/animal.png';

function WordContainer({ word, wordImageUrl=false }) {

    return (
      <div className={styles.wordContainer}>
        <img className={styles.wordImage} src={wordImageUrl || wordImageTest}></img>
        <span className={`${styles.word} text-h1`}>{word}</span>
      </div>
    )
}

export default WordContainer;
