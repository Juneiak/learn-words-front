import React from "react";
import styles from './word-set-card.module.css';
import { useDispatch } from 'react-redux';
import { getWordSet } from '../../services/actions/functions';

function WordSetCard({ wordSetData }) {
  const dispatch = useDispatch();

  const handleArticleClick = () => {
    dispatch(getWordSet(wordSetData.setId))
  }

    return (
      <article
        className={styles.card}
        style={{backgroundImage: `url(${wordSetData.setImageUrl})`}}
        onClick={handleArticleClick}
      >
        <span className={styles.title}>{wordSetData.title}</span>
      </article>
    )
}

export default WordSetCard;
