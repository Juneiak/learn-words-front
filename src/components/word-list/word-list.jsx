import React from "react";
import styles from './word-list.module.css';
import WordCard from "../word-card/word-card";

function WordList({ title }) {

  const cardsData = [
    {
      word: 'бла',
      translation: 'bla',
      imageUrl: 'https://images.unsplash.com/photo-1642470951285-77fc98cd304e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
    },
    {
      word: 'бла',
      translation: 'bla',
      imageUrl: 'https://images.unsplash.com/photo-1642470951285-77fc98cd304e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
    },
    {
      word: 'бла',
      translation: 'bla',
      imageUrl: 'https://images.unsplash.com/photo-1642470951285-77fc98cd304e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
    },
    {
      word: 'бла',
      translation: 'bla',
      imageUrl: 'https://images.unsplash.com/photo-1642470951285-77fc98cd304e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
    },
    {
      word: 'бла',
      translation: 'bla',
      imageUrl: 'https://images.unsplash.com/photo-1642470951285-77fc98cd304e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
    },
    {
      word: 'бла',
      translation: 'bla',
      imageUrl: 'https://images.unsplash.com/photo-1642470951285-77fc98cd304e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
    },
    {
      word: 'бла',
      translation: 'bla',
      imageUrl: 'https://images.unsplash.com/photo-1642470951285-77fc98cd304e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
    }
  ]

  return (
    <div className={styles.listContainer}>     
      <h4 className={`${styles.listTitle} text-h3`}>{title}</h4>
      <div className={styles.listBorder}>
        <ul className={styles.list}>
          { cardsData.map((cardData, index) => (
            <li key={index} className={styles.element}>
              <WordCard data={cardData} />
            </li>
          ))}
        </ul>
      </div>
      
    </div>
  )
}

export default WordList;
