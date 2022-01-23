import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/app';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import indexReducer from './services/reducers/indexReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const enhancer = applyMiddleware(thunk);
const store = createStore(indexReducer, enhancer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
