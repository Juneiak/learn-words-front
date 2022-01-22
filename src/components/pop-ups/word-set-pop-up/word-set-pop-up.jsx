import React from "react";
import styles from './word-set-pop-up.module.css';
import PopUpLayout from "../pop-up-layout/pop-up-layout";
import WordList from "../../word-list/word-list";
import ButtonPrimary from "../../buttons/button-primary/button-primary";

function WordSetPopUp({ handleCLose }) {
  const aboutText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  const setTitle = 'Basic';
  // take data from redux

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
  const cardsData1 = [
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
  ]
    return (
      <PopUpLayout handleCLose={handleCLose}>
        <div className={styles.content}>
          <h3 className={`${styles.setTitle} text-h3`}>{setTitle}</h3>
          <p className={`${styles.about} text-body`}>{aboutText}</p>
          <div className={styles.list}>
            <WordList cardsData={cardsData} size='small' />
          </div>
          <ButtonPrimary
            buttonText='Add word set'
            clickHandler={() => false}
            buttonWidth='100%'
            buttonHeight='56px'
          />
        </div>
      </PopUpLayout>
    )
}

export default WordSetPopUp;
