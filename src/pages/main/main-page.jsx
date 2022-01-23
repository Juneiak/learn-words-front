import React from 'react';
import styles from './main-page.module.css';
import ButtonPrimary from '../../components/buttons/button-primary/button-primary';
import { AddIcon } from '../../components/icons';
import SearchBar from '../../components/search-bar/search-bar';
import WordList from '../../components/word-list/word-list';
import PageWrap from '../../components/page-wrap/page-wrap';

function MainPage() {
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
    <PageWrap>
      <section className={styles.functions}>
        <ButtonPrimary 
          buttonText='add new word'
          clickHandle={() => true}
          buttonWidth='210px'
          buttonHeight='56px'
        >
          <AddIcon constTheme='dark' />
        </ButtonPrimary>
        <SearchBar placeholder='find added word' />
      </section>

      <section className={styles.lists}>
        <WordList size='big' cardsData={cardsData} title='Words to study' />
        <WordList size='big' cardsData={cardsData1} title='Learned words'/>
      </section>
    </PageWrap>

  )
}

export default MainPage;
