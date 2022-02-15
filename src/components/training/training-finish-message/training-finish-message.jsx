import React from "react";
import ButtonPrimary from "../../buttons/button-primary/button-primary";
import styles from './training-finish-message.module.css';

function TrainingFinishMessage({ repeatHandler }) {

  return (
    <div className={styles.finishMessage}>
      <span className="text-h3"> you have repeated all words! Wanna repeat?</span>
      <ButtonPrimary 
        buttonText='Repeat'
        clickHandler={repeatHandler}
        buttonWidth='100%'
        buttonHeight='56px'
      />
    </div>
  )
}

export default TrainingFinishMessage;
