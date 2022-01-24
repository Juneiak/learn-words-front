import React from 'react';
import styles from './main-page.module.css';
import ButtonPrimary from '../../components/buttons/button-primary/button-primary';
import { AddIcon } from '../../components/icons';
import SearchBar from '../../components/search-bar/search-bar';
import WordList from '../../components/word-list/word-list';
import PageWrap from '../../components/page-wrap/page-wrap';
import { cardsData, cardsData1 } from '../../data-for-test/data';
function MainPage() {
  

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
