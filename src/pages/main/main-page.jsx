import React from 'react';
import styles from './main-page.module.css';
import ButtonPrimary from '../../components/buttons/button-primary/button-primary';
import { AddIcon } from '../../components/icons';

function MainPage() {



  return (
    <main className={styles.page}>
      <div className={styles.content}>
        <section className={styles.function}>
          <ButtonPrimary 
            buttonText='add new word'
            clickHandle={() => true}
            buttonIcon={AddIcon}
            buttonWidth='210px'
            buttonHeight='56px'
          />
        </section>
        <section className={styles.lists}>

        </section>
      </div>
      
    </main>
  )
}

export default MainPage;
