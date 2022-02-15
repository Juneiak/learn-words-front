import React from "react";
import styles from './trainig-status.module.css';
import ButtonPrimary from "../../buttons/button-primary/button-primary";

function TrainingStatus({ status, checkButtonActivity, checkHandler, nextHandler }) {
    return (
      <div className={styles.trainingStatus}>
        {
          status === 'listen' 
          ? <span className='text-h3'>Are you sure?</span>
          : status === 'correct'
            ? <span className={`text-h3 ${styles.correctMessage}`}>Correct! next?</span>
            : <span className={`text-h3 ${styles.incorrectMessage}`}>Wrong! try again</span>
        }
        { status === 'correct'
          ? <ButtonPrimary
              buttonText='Next word'
              clickHandler={nextHandler}
              buttonWidth='100%'
              buttonHeight='56px'
            />
          : <ButtonPrimary
              buttonText='Check'
              clickHandler={checkHandler}
              buttonWidth='100%'
              buttonHeight='56px'
              isActive={checkButtonActivity}
            />
        }
        
      </div>
    )
}

export default TrainingStatus;
