import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/app';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './services/reducers/root-reducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const enhancer = applyMiddleware(thunk);
const store = createStore(rootReducer, enhancer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <HashRouter  basename='/'>
          <App />
        </HashRouter>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
