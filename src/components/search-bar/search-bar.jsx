import React from "react";
import styles from './search-bar.module.css';
import { SearchIcon } from "../icons";

function SearchBar({placeholder}) {
  const [ searchText, setSerchText ] = React.useState('')

  const handleTextChange = (evt) => setSerchText(evt.target.value);

  const temporarySessionCleaner = () => {
    sessionStorage.removeItem('isNewSessionStart')
  }

    return (
      <div className={styles.searchBar}>
        <form className={styles.form}>

          <div className={styles.searchField}>
            <SearchIcon />
            <input
            className={`${styles.textInput} text-caption`}
            type='text'
            minLength='1'
            required
            maxLength='100000'
            placeholder={placeholder}
            value={searchText}
            onChange={handleTextChange}
            ></input>
          </div>

          <button
            className={`${styles.button} text-button`}
            onClick={temporarySessionCleaner}
            type='button'
          >
            Search
          </button>
          
        </form>
      </div>
    )
}

export default SearchBar;
