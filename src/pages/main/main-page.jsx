import React from 'react';
import styles from './main-page.module.css';
import ButtonPrimary from '../../components/buttons/button-primary/button-primary';
import { AddIcon } from '../../components/icons';
import SearchBar from '../../components/search-bar/search-bar';
import WordList from '../../components/word-list/word-list';
import PageWrap from '../../components/page-wrap/page-wrap';

function MainPage() {

  return (
    <PageWrap>
      <section className={styles.functions}>
        <ButtonPrimary 
          buttonText='add new word'
          clickHandle={() => true}
          buttonIcon={AddIcon}
          buttonWidth='210px'
          buttonHeight='56px'
        />
        <SearchBar />
      </section>

      <section className={styles.lists}>
        <WordList />
        <WordList />
      </section>
    </PageWrap>

  )
}

export default MainPage;
