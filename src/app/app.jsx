import React from 'react';
import './app.css';
import '../ui/colors.css';
import '../ui/text.css';
import '../ui/standard-patterns.css';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import { MainPage, AboutPage, WordSetsPage } from '../pages/index';
import { Switch, Route } from 'react-router-dom';
import { AddPopUp, WordSetPopUp } from '../components/pop-ups';
import { useSelector } from 'react-redux';

function App() {

  const [ isPopUpOpen, setIsPopUpOpen ] = React.useState(false);
  const {
    isDarkThemeOn,
    addPopUpIsOpen,
    selectedWordSet 
  } = useSelector(store => ({
    isDarkThemeOn: store.app.isDarkThemeOn,
    addPopUpIsOpen: store.app.addPopUpIsOpen,
    selectedWordSet: store.funcs.selectedWordSet,
  }))

  return (
    <div className="app colors" data-theme-mode={isDarkThemeOn ? 'dark' : 'light'}>
      <Header handleOpenPopUp={} />

      <Switch>
        <Route exact path='/'>
          <MainPage />
        </Route>

        <Route exact path='/about'>
          <AboutPage />
        </Route>

        <Route exact path='/word-sets'>
          <WordSetsPage />
        </Route>
      </Switch>

      <Footer />

      <Switch>
        {addPopUpIsOpen && <AddPopUp handleCLose={openPopUpHandler} />}
        {selectedWordSet?.setId && <WordSetPopUp handleCLose={openPopUpHandler} />}

      </Switch>
    </div>
  );
}

export default App;
