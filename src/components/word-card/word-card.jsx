import React from "react";
import styles from './word-card.module.css';
import { DeleteIcon, ArrowIcon, AddIcon, ReloadIcon } from "../icons";
import ProgressBar from "../progress-bar/progress-bar";
import { useDispatch } from 'react-redux';
import { addNewWord } from '../../services/actions/functions';
import { RESET_WORD_PROGRESS, DELETE_WORD} from '../../services/actions/constants';

function WordCard({ data }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch({type: DELETE_WORD, word: data.word})
  }
  
  const handleAdd = () => {
    dispatch(addNewWord({
      ...data,
      isNew: false,
    }))
  }

  const handleResetProgress = () => {
    dispatch({type: RESET_WORD_PROGRESS, word: data.word})
  }

  return (
    <article className={styles.card}>
      <img className={styles.image} src={data.imageUrl} />
      <div className={styles.translateContainer}>
        <span className={styles.word}>{data.word}</span>
        <ArrowIcon />
        <span className={`${styles.word} text-caption`}>{data.translation}</span>
      </div>
      <button
        className={styles.actionButton}
        onClick={
          data.isNew 
          ? handleAdd
          : data.progress === 100 
            ? handleResetProgress
            : handleDelete
        }
      >
          {
            data.isNew 
            ? <AddIcon size='big' constTheme='light' />
            : data.progress === 100 
              ? <ReloadIcon />
              : <DeleteIcon />
          }
      </button>
      <div className={styles.progressBar}><ProgressBar progress={data.progress}/></div>
    </article>
  )
}

export default WordCard;
