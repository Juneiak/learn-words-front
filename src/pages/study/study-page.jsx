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

function StudyPage() {
  const { values, handleChange, resetForm, isValid } = useFormWithValidation();
  const [ isGameStarted, setIsGameStarted ] = React.useState(false);
  const [ wordToGuess, setWordToGuess ] = React.useState({});
  const [ gameStatus, setGameStatus] = React.useState('listen'); // three state: listen, correct, incorrect

  const { userLearningWords } = useSelector(store => ({
    userLearningWords: store.funcs.userLearningWords
  }))

  const setRandomWordToGuess = () => {
    setWordToGuess(userLearningWords[getRandomNumber(0, userLearningWords.length - 1)])
  }

  const handleType = (evt) => {
    if (gameStatus !== 'listen') setGameStatus('listen')
    handleChange(evt);
  }

  const handleStartGame = () => {
    setIsGameStarted(!isGameStarted);
    setRandomWordToGuess();
    setGameStatus('listen');
  }

  const handleCheckWord = () => {
    if (values.translation === wordToGuess.translation) {
      setGameStatus('correct')
      return
    }
    setGameStatus('incorrect');
  }
  const handleNextWord = () => {
    setGameStatus('listen');
    setRandomWordToGuess();
    resetForm();
  }


  return (
    <PageWrap>
      {!isGameStarted 
        ? <div className={styles.gameTag}>
            <span className={`${styles.wordsLeft} text-h3`}>
              {`words to learn: ${userLearningWords.length || 0}`}
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
          </section>
      }
      
    </PageWrap>
        
  )
}

export default StudyPage;
