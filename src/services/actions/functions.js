import {
  SELECT_WORD_SET,
  SELECT_WORD_SET_IS_LOADING,
  SELECT_WORD_SET_IS_ERROR,
  ADD_NEW_WORD,
  ADD_NEW_WORD_IS_LOADING,
  ADD_NEW_WORD_IS_ERROR,
} from './constants';
import {wordSets} from '../../data-for-test/data';

const getWordSet = (wordSetId) => {
  // return (dispatch) => {
  //   dispatch(SELECT_WORD_SET_IS_LOADING);
  //   fetch('bla-bla-bla.com/', {
  //     method: 'GET',
  //     body: {
  //       id: wordSetId
  //     }
  //   })
  //   .then((wordSet) => {
  //     dispatch({type: SELECT_WORD_SET, wordSet})
  //   })
  //   .catch((err) => {
  //     dispatch({type: SELECT_WORD_SET_IS_ERROR})
  //   })
  // }
  return (dispatch) => {
    dispatch({type: SELECT_WORD_SET_IS_LOADING, wordSetId});
    new Promise((resolve, reject) => {
      setTimeout(()=> {
        const findedWordSet = wordSets.find(set => set.setId === wordSetId);
        resolve(findedWordSet) // here is data of new word
      }, 1000)
    })
    .then((wordSet) => {
      dispatch({type: SELECT_WORD_SET, wordSet})
    })
    .catch((err) => {
      dispatch({type: SELECT_WORD_SET_IS_ERROR})
    })
  }
}

const addNewWord = (newWordData) => {
  // return (dispatch) => {
  //   dispatch({type: ADD_NEW_WORD_IS_LOADING})
  //   fetch('bla-bla-bla.com/', {
  //     method: 'GET',
  //     body: { newWordData }
  //   })
  //   .then((addedWordData) => {
  //     dispatch({type: ADD_NEW_WORD, dataToAdd: addedWordData})
  //   })
  //   .catch((err) => {
  //     dispatch({type: ADD_NEW_WORD_IS_ERROR})
  //   })
  // }

  return (dispatch) => {
    dispatch({type: ADD_NEW_WORD_IS_LOADING})
    new Promise((resolve, reject) => {
      setTimeout(()=> {
        resolve(newWordData);
        
      }, 1000)
    })
    .then((addedWordData) => {
      dispatch({type: ADD_NEW_WORD, dataToAdd: addedWordData})
    })
    .catch((err) => {
      dispatch({type: ADD_NEW_WORD_IS_ERROR})
    })
  }
}

export {
  getWordSet,
  addNewWord
}