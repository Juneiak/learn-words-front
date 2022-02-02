import React from "react";
import styles from './word-container.module.css';
import {defaultImageUrl} from '../../data-for-test/data';

function WordContainer({ word, wordImageUrl=false }) {

    return (
      <div className={styles.wordContainer}>
        <img className={styles.wordImage} src={wordImageUrl || defaultImageUrl}></img>
        <span className={`${styles.word} text-h1`}>{word}</span>
      </div>
    )
}

export default WordContainer;
