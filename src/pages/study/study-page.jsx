import React from "react";
import styles from './study-page.module.css';
import PageWrap from "../../components/page-wrap/page-wrap";
import PrimaryInput from "../../components/primary-input/primary-input";
import ButtonPrimary from "../../components/buttons/button-primary/button-primary";
import { useFormWithValidation } from '../../utils/hooks/useForm';
import WordContainer from '../../components/word-container/word-container';
import LoadingPrimary from "../../components/loadings/loading-primary/loading-primary";
import { useDispatch, useSelector } from 'react-redux';
import AddButton from '../../components/buttons/add-button/add-button';

function StudyPage() {
  const { values, handleChange, isValid } = useFormWithValidation();
  const [ isGameStarted, setIsGameStarted ] = React.useState(false);

  const { userLearningWords } = useSelector(store => ({
    userLearningWords: store.funcs.userLearningWords
  }))

  const handleStartGameButton = () => {
    setIsGameStarted(!isGameStarted)
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
                    clickHandler={handleStartGameButton}
                    buttonWidth='100%'
                    buttonHeight='56px'
                  />
                : <AddButton />
            }
          </div>
        : <section className={styles.studyModule}>
            <WordContainer word='plane' wordImageUrl={false} />
            <form className={styles.form}>
              <PrimaryInput
                inputType = 'text'
                inputPlaceholder='write translation'
                inputName='translation'
                inputOnChange={handleChange}
                inputValue={values.translation}
                inputRequired={true}
              />
              <ButtonPrimary
                buttonText='commit'
                clickHandler={() => false}
                buttonWidth='100%'
                buttonHeight='56px'
                isActive={isValid}
              />
            </form>
          </section>
      }
      
    </PageWrap>
        
  )
}

export default StudyPage;
