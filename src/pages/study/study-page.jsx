import React from "react";
import styles from './study-page.module.css';
import PageWrap from "../../components/page-wrap/page-wrap";
import PrimaryInput from "../../components/primary-input/primary-input";
import ButtonPrimary from "../../components/buttons/button-primary/button-primary";
import { useFormWithValidation } from '../../utils/hooks/useForm';
import WordContainer from '../../components/word-container/word-container';
import { useSelector } from 'react-redux';
import AddButton from '../../components/buttons/add-button/add-button';
import { getRandomNumber } from "../../utils/math-funcs";
import GameStatus from '../../components/game-status/game-status';
import FinishMessage from "../../components/finish-message/finish-message";

function StudyPage() {
  const { values, handleChange, resetForm, isValid } = useFormWithValidation();
  const [ isGameStarted, setIsGameStarted ] = React.useState(false);
  const [ wordToGuess, setWordToGuess ] = React.useState({});
  const [ gameStatus, setGameStatus] = React.useState('listen'); // three state: listen, correct, incorrect
  const [ wordsToLearnList, setWordsToLearnList ] = React.useState([])
  const [ ]
  const userWords = useSelector(store => store.funcs.userWords)

  

  const setRandomWordToGuess = () => {
    setWordToGuess(wordsToLearnList[getRandomNumber(0, wordsToLearnList.length - 1)])
  }

  const handleType = (evt) => {
    if (gameStatus !== 'listen') setGameStatus('listen')
    handleChange(evt);
  }

  const handleStartGame = () => {
    setIsGameStarted(true);
    setRandomWordToGuess();
    setGameStatus('listen');
  }

  const handleCheckWord = () => {
    if (values.translation === wordToGuess.translation) {
      setGameStatus('correct')
      setWordsToLearnList(wordsToLearnList.filter(word => word.word !== wordToGuess.word))
      return
    }
    setGameStatus('incorrect');
  }
  const handleNextWord = () => {
    setGameStatus('listen');
    setRandomWordToGuess();
    resetForm();
  }
  
  const handleRepeat = () => {
    setWordsToLearnList(userLearningWords);
    setGameStatus('listen');
    resetForm();
  }

  React.useEffect(() => {
    setWordsToLearnList(userLearningWords);
  }, [userWords])


  return (
    <PageWrap>
      {!isGameStarted 
        ? <div className={styles.gameTag}>
            <span className={`${styles.wordsLeft} text-h3`}>
              {`words to learn: ${wordsToLearnList.length || 0}`}
            </span>
            {
              userLearningWords.length > 0 
                ? <ButtonPrimary
                    buttonText='start the game'
                    clickHandler={handleStartGame}
                    buttonWidth='100%'
                    buttonHeight='56px'
                  />
                : <AddButton />
            }
          </div>
        : <section className={styles.studyModule}>
          {
            wordsToLearnList.length === 0
            ? <FinishMessage repeatHandler={handleRepeat}/>
            : <>
                <WordContainer word={wordToGuess.word} wordImageUrl={wordToGuess.imageUrl} />
                <form className={styles.form}>
                  <PrimaryInput
                    inputType = 'text'
                    inputPlaceholder='write translation'
                    inputName='translation'
                    inputOnChange={handleType}
                    inputValue={values.translation}
                    inputRequired={true}
                  />
                  <GameStatus
                    checkButtonActivity={isValid} 
                    gameStatus={gameStatus}
                    checkHandler={handleCheckWord}
                    nextHandler={handleNextWord}
                  />
                </form>
              </>
          }
          </section>
      }
      
    </PageWrap>
        
  )
}

export default StudyPage;
