import React from "react";
import styles from './primary-input.module.css';

function PrimaryInput({
  inputType = 'text',
  inputPlaceholder,
  inputMaxLenght,
  inputMinLenght,
  inputName,
  inputOnChange = () => false,
  inputValue,
  inputError,
  inputRequired
}) {

  return (
    <div className={styles.inputContainer}>
      <input
        className={`
          ${inputError && styles.errorInput}
          ${styles.input}
          text-caption
        `}
        type={inputType}
        placeholder={inputPlaceholder}
        maxLength={inputMaxLenght}
        minLength={inputMinLenght}
        name={inputName}
        onChange={inputOnChange}
        value={inputValue}
        required={inputRequired}
      />
      {inputError && <span className={styles.errorText}>{inputError}</span>}
    </div>
  )
}

export default PrimaryInput;
