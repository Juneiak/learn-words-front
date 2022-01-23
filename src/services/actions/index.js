import {
  SELECT_WORD_SET,
  SELECT_WORD_SET_IS_LOADING,
  SELECT_WORD_SET_IS_ERROR
} from './constants';

const getWordSet = (wordSetId) => {
  return (dispatch) => {
    dispatch(SELECT_WORD_SET_IS_LOADING);
    fetch('bla-bla-bla.com/', {
      method: 'GET',
      body: {
        id: wordSetId
      }
    })
    .then((wordSet) => {
      dispatch({type: SELECT_WORD_SET, wordSet})
    })
    .catch((err) => {
      dispatch({type: SELECT_WORD_SET_IS_ERROR})
    })
  }
}

export {
  getWordSet,
}