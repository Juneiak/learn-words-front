import React from "react";
import styles from './study-page.module.css';
import PageWrap from "../../components/page-wrap/page-wrap";
import PrimaryInput from "../../components/primary-input/primary-input";
import ButtonPrimary from "../../components/buttons/button-primary/button-primary";
import { useForm } from '../../utils/hooks/useForm';
import WordContainer from '../../components/word-container/word-container';

function StudyPage() {
  const { values, handleChange } = useForm();

  return (
    <PageWrap>
      <section className={styles.studyModule}>
        
        <WordContainer word='plane' wordImageUrl={false} />

        <PrimaryInput
          inputType = 'text'
          inputPlaceholder='write translation'
          inputName='translation'
          inputOnChange={handleChange}
          inputValue={values.translation}
        />
        <ButtonPrimary
          buttonText='commit'
          clickHandler={() => false}
          buttonWidth='100%'
          buttonHeight='56px'
        />

      </section>
    </PageWrap>
        
  )
}

export default StudyPage;
