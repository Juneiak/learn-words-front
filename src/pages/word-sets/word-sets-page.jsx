import React from "react";
import PageWrap from "../../components/page-wrap/page-wrap";
import styles from './word-sets-page.module.css';
import WordSetCard from "../../components/word-set-card/word-set-card";
import animalImage from '../../images/word-set-image/animal.png';
import basicImage from '../../images/word-set-image/basic.png';
import travelImage from '../../images/word-set-image/travel.png';
import foodImage from '../../images/word-set-image/food.png';

function WordSetsPage() {
  return (
    <PageWrap title='Ready-make word sets to learn'>
      <section className={styles.content}>
        <ul className={styles.list}>
          <li className={styles.element}>
            <WordSetCard title='food' imageUrl={foodImage} />
          </li>
          <li className={styles.element}>
            <WordSetCard title='travel' imageUrl={travelImage} />
          </li>
          <li className={styles.element}>
            <WordSetCard title='basic' imageUrl={basicImage} />
          </li>
          <li className={styles.element}>
            <WordSetCard title='animal' imageUrl={animalImage} />
          </li>
        </ul>
      </section>
    </PageWrap>
  )
}

export default WordSetsPage;
