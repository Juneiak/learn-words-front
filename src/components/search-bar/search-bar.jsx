import React from "react";
import styles from './search-bar.module.css';
import { SearchIcon } from "../icons";

function SearchBar() {
  const [ searchText, setSerchText ] = React.useState('')

  const handleTextChange = (evt) => setSerchText(evt.target.value);

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
            placeholder="find added word"
            value={searchText}
            onChange={handleTextChange}
            ></input>
          </div>

          <button
            className={`${styles.button} text-button`}
            onClick={() => true}
            type='button'
          >
            Search
          </button>
          
        </form>
      </div>
    )
}

export default SearchBar;
