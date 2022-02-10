import React from "react";
import styles from './word-list.module.css';
import WordCard from "../word-card/word-card";

function WordList({ title, cardsData, size='big' }) {
  

  return (
    <div 
      className={size === 'big' ? styles.listContainerBig : styles.listContainerSmall}
    >     
      {title && <h4 className={`${styles.listTitle} text-h3`}>{title}</h4>}
      <div
        className={size === 'big' ? styles.listBorderBig : styles.listBorderSmall}
      >
        <ul className={styles.list}>
          {
            cardsData.length === 0
            ? <div className={styles.emptyMessage}><span className="text-body">Empty</span></div>
            : cardsData.map((cardData, index) => (
            <li key={index} className={styles.element}>
              <WordCard  data={cardData} />
            </li>
          ))
          }
        </ul>
      </div>
      
    </div>
  )
}

export default WordList;
