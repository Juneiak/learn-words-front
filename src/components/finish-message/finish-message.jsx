import React from "react";
import ButtonPrimary from "../buttons/button-primary/button-primary";
import styles from './finish-message.module.css';

function FinishMessage({ repeatHandler }) {

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

export default FinishMessage;
