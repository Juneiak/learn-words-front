import React from 'react';
import styles from './main-page.module.css';
import AddButton from '../../components/buttons/add-button/add-button';
import SearchBar from '../../components/search-bar/search-bar';
import WordList from '../../components/word-list/word-list';
import PageWrap from '../../components/page-wrap/page-wrap';
import { cardsData, cardsData1 } from '../../data-for-test/data';
import useWindowDimensions from '../../utils/hooks/useWindowDimensions';
import ListsControlpanel from '../../components/lists-control-panel/lists-control-panel';

function MainPage() {
  const { width } = useWindowDimensions();
  const [ isSecondList, setIsSecondList] = React.useState(false);

  const toggleList = () => {
    setIsSecondList(!isSecondList);
  }
  return (
    <PageWrap>
      <section className={styles.functions}>
        {width > 1200 && <AddButton />}
        <SearchBar placeholder='find added word' />
      </section>

      <section className={styles.wordLists}>
        {width < 1200 && <ListsControlpanel toggleHandler={toggleList} isRightSideActive={isSecondList} />}
        <div className={styles.lists}>
          {<WordList 
            size='big'
            cardsData={isSecondList ? cardsData1 : cardsData}
            title={width > 1200 && 'Words to study'}
          />}
          {width > 1200 && 
            <WordList
              size='big'
              cardsData={cardsData1} 
              title='Learned words'
            />
          }
        </div>

      </section>
    </PageWrap>

  )
}

export default MainPage;
