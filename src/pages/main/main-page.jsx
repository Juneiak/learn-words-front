import React from 'react';
import styles from './main-page.module.css';
import AddButton from '../../components/buttons/add-button/add-button';
import SearchBar from '../../components/search-bar/search-bar';
import WordList from '../../components/word-list/word-list';
import PageWrap from '../../components/page-wrap/page-wrap';
import { cardsData, cardsData1 } from '../../data-for-test/data';
import useWindowDimensions from '../../utils/hooks/useWindowDimensions';
function MainPage() {
  const { width } = useWindowDimensions();

  return (
    <PageWrap>
      <section className={styles.functions}>
        {width > 1200 && <AddButton />}
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
