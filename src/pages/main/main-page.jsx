import React from 'react';
import styles from './main-page.module.css';
import AddButton from '../../components/buttons/add-button/add-button';
import SearchBar from '../../components/search-bar/search-bar';
import WordList from '../../components/word-list/word-list';
import PageWrap from '../../components/page-wrap/page-wrap';
import useWindowDimensions from '../../utils/hooks/useWindowDimensions';
import ListsControlpanel from '../../components/lists-control-panel/lists-control-panel';
import { useSelector, useDispatch } from 'react-redux';
import LoadingErrorWrapper from '../../components/hocs/loading-error-wrapper/loading-error-wrapper';
import { getUserWords } from '../../services/actions/functions';

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
  const userLearningWords = userWords.filter((word) => word.progress !== 100)
  const userLearnedWords = userWords.filter((word) => word.progress === 100)

  const toggleList = () => {
    setIsSecondList(!isSecondList);
  }

  React.useEffect(() => {
    if (!sessionStorage.getItem('isNewSessionStart')) {
      dispatch(getUserWords());
      // sessionStorage.setItem('isNewSessionStart', 'true'); // only for non-backend use
    }
  }, [])

  return (
    <PageWrap>
      <section className={styles.functions}>
        {width > 1200 && <AddButton />}
        <SearchBar placeholder='find added word' />
      </section>

      <section className={styles.wordLists}>
        {width < 1200 && <div style={{marginBottom: '15px'}}>
            <ListsControlpanel toggleHandler={toggleList} isRightSideActive={isSecondList} />
        </div>}

        <LoadingErrorWrapper isError={userWordsIsError} isLoading={userWordsIsLoading}>
          <div className={styles.lists}>
            <WordList 
              size='big'
              cardsData={isSecondList ? userLearnedWords : userLearningWords}
              title={width > 1200 && 'Words to study'}
            />
            {width > 1200 && 
              <WordList
                size='big'
                cardsData={userLearnedWords} 
                title='Learned words'
              />
            }
          </div>
        </LoadingErrorWrapper>

      </section>
    </PageWrap>

  )
}

export default MainPage;
