import React from 'react';
import styles from './main-page.module.css';
import AddButton from '../../components/buttons/add-button/add-button';
import SearchBar from '../../components/search-bar/search-bar';
import WordList from '../../components/word-list/word-list';
import PageWrap from '../../components/page-wrap/page-wrap';
import useWindowDimensions from '../../utils/hooks/useWindowDimensions';
import ListsControlpanel from '../../components/lists-control-panel/lists-control-panel';
import { getUserWords } from '../../services/actions/functions';
import { useSelector, useDispatch } from 'react-redux';
import ErrorMessage from '../../components/error-message/error-message';
import LoadingPrimary from '../../components/loadings/loading-primary/loading-primary';

function MainPage() {
  const dispatch = useDispatch();

  const [ isSecondList, setIsSecondList] = React.useState(false);
  const { width } = useWindowDimensions();
  const {
    userWords,
    userWordsIsLoading,
    userWordsIsError,
  } = useSelector(store => ({
    userWords: store.funcs.userWords,
    userWordsIsLoading: store.funcs.userWordsIsLoading,
    userWordsIsError: store.funcs.userWordsIsError,
  }))

  const wordsToStudy = userWords.filter(word => word.progress != 100);
  const learnedWords = userWords.filter(word => word.progress === 100);

  const toggleList = () => {
    setIsSecondList(!isSecondList);
  }

  React.useEffect(() => {
    if (!sessionStorage.getItem('isNewSessionStart')) {
      dispatch(getUserWords());
      console.log(1)
      sessionStorage.setItem('isNewSessionStart', 'true'); // only for non backend use
    }
  }, [])

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
                  cardsData={isSecondList ? wordsToStudy : wordsToStudy}
                  title={width > 1200 && 'Words to study'}
                />}
                {width > 1200 && 
                  <WordList
                    size='big'
                    cardsData={learnedWords} 
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
