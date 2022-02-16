import React from 'react';
import './app.css';
import '../ui/colors.css';
import '../ui/text.css';
import '../ui/standard-patterns.css';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import { MainPage, AboutPage, WordSetsPage, StudyPage } from '../pages/index';
import { Switch, Route } from 'react-router-dom';
import { AddPopUp, WordSetPopUp } from '../components/pop-ups';
import { useSelector, useDispatch } from 'react-redux';
import SideMenu from '../components/pop-ups/side-menu/side-menu';
import {getUserWords} from '../services/actions/functions';

function App() {
  const dispatch = useDispatch();
  const {
    isDarkThemeOn,
    addPopUpIsOpen,
    isSideMenuOpen,
    isWordSetPopUpOpen
  } = useSelector(store => ({
    isDarkThemeOn: store.app.isDarkThemeOn,
    addPopUpIsOpen: store.app.addPopUpIsOpen,
    isSideMenuOpen: store.app.isSideMenuOpen,
    isWordSetPopUpOpen: store.app.isWordSetPopUpOpen
  }))

  React.useEffect(() => {
    if (!sessionStorage.getItem('isNewSessionStart')) {
      dispatch(getUserWords());
      // sessionStorage.setItem('isNewSessionStart', 'true'); // only for non-backend use
    }
  }, [])

  return (
    <div className="app colors" data-theme-mode={isDarkThemeOn ? 'dark' : 'light'}>
      <Header />

      <Switch>
        <Route exact path='/main'>
          <MainPage />
        </Route>

        <Route exact path='/about'>
          <AboutPage />
        </Route>

        <Route exact path='/word-sets'>
          <WordSetsPage />
        </Route>

        <Route exact path='/'>
          <StudyPage />
        </Route>

      </Switch>

      <Footer />

      <Switch>
        {addPopUpIsOpen && <AddPopUp />}
        {isWordSetPopUpOpen && <WordSetPopUp />}
        {isSideMenuOpen && <SideMenu />}
      </Switch>
    </div>
  );
}

export default App;
