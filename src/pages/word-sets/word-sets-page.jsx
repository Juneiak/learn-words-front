import React from "react";
import PageWrap from "../../components/page-wrap/page-wrap";
import styles from './word-sets-page.module.css';
import WordSetCard from "../../components/word-set-card/word-set-card";
import SearchBar from "../../components/search-bar/search-bar";
import { wordSetList } from '../../data-for-test/data';


function WordSetsPage() {
  
  return (
    <PageWrap title='Ready-make word sets to learn'>
      <section className={styles.content}>
        <div className={styles.searchBar}><SearchBar placeholder='find word set' /></div>
        <ul className={styles.list}>
          {wordSetList.map((wordSetData, index )=> (
            <li key={index} className={styles.element}>
              <WordSetCard wordSetData={wordSetData} />
            </li>
          ))}
        </ul>
      </section>
    </PageWrap>
  )
}

export default WordSetsPage;
