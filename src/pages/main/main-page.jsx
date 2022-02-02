import React from 'react';
import styles from './main-page.module.css';
import AddButton from '../../components/buttons/add-button/add-button';
import SearchBar from '../../components/search-bar/search-bar';
import WordList from '../../components/word-list/word-list';
import PageWrap from '../../components/page-wrap/page-wrap';
import useWindowDimensions from '../../utils/hooks/useWindowDimensions';
import ListsControlpanel from '../../components/lists-control-panel/lists-control-panel';
import { useSelector } from 'react-redux';
import ErrorMessage from '../../components/error-message/error-message';
import LoadingPrimary from '../../components/loadings/loading-primary/loading-primary';

function MainPage() {

  const [ isSecondList, setIsSecondList] = React.useState(false);
  const { width } = useWindowDimensions();
  const {
    userLearningWords,
    userLearnedWords,
    userWordsIsLoading,
    userWordsIsError,
  } = useSelector(store => ({
    userLearningWords: store.funcs.userLearningWords,
    userLearnedWords: store.funcs.userLearnedWords,
    userWordsIsLoading: store.funcs.userWordsIsLoading,
    userWordsIsError: store.funcs.userWordsIsError,
  }))

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
        {
          userWordsIsError
          ? <ErrorMessage />
          : userWordsIsLoading
            ? <LoadingPrimary />
            : <div className={styles.lists}>
                {<WordList 
                  size='big'
                  cardsData={isSecondList ? userLearnedWords : userLearningWords}
                  title={width > 1200 && 'Words to study'}
                />}
                {width > 1200 && 
                  <WordList
                    size='big'
                    cardsData={userLearnedWords} 
                    title='Learned words'
                  />
                }
              </div>
        }

      </section>
    </PageWrap>

  )
}

export default MainPage;
