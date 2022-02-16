import {
  SELECT_WORD_SET,
  SELECT_WORD_SET_IS_LOADING,
  SELECT_WORD_SET_IS_ERROR,

  ADD_NEW_WORD,
  ADD_NEW_WORD_IS_LOADING,
  ADD_NEW_WORD_IS_ERROR,

  SET_USER_WORDS,
  SET_USER_WORDS_IS_ERROR,
  SET_USER_WORDS_IS_LOADING,

  WORD_SET_POPUP_TOGGLE,

} from './constants';
import { wordSets, userWords } from '../../data-for-test/data';

const getUserWords = () => {
  return (dispatch) => {
    dispatch({type: SET_USER_WORDS_IS_LOADING});
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(userWords)
      }, 500)
    })
    .then((fetchedUserWords) => {
      dispatch({type: SET_USER_WORDS, fetchedUserWords})
      return fetchedUserWords
    })
    .catch((err) => {
      dispatch({type: SET_USER_WORDS_IS_ERROR})
    })
  }
}

const getWordSet = (wordSetId) => {
  return (dispatch) => {
    dispatch({type: WORD_SET_POPUP_TOGGLE})
    dispatch({type: SELECT_WORD_SET_IS_LOADING});
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
  return (dispatch) => {
    dispatch({type: ADD_NEW_WORD_IS_LOADING})
    return new Promise((resolve, reject) => {
      setTimeout(()=> {
        resolve(newWordData);
        
      }, 1000)
    })
    .then((addedWordData) => {
      dispatch({type: ADD_NEW_WORD, addedWordData})
    })
    .catch((err) => {
      dispatch({type: ADD_NEW_WORD_IS_ERROR})
    })
  }
}

export {
  getWordSet,
  addNewWord,
  getUserWords
}