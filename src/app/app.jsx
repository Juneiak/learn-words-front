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

function App() {
  const [themeMode, changeThemeMode] = React.useState('light');
  const [ isPopUpOpen, setIsPopUpOpen ] = React.useState(false);

  function changeThemeHandler() {
    const changedTheme = themeMode === 'light' ? 'dark' : 'light';
    changeThemeMode(changedTheme);
  };

  const openPopUpHandler = () => {
    setIsPopUpOpen(!isPopUpOpen)
  }

  return (
    <div className="app colors" data-theme-mode={themeMode}>
      <Header handleOpenPopUp={openPopUpHandler} onThemeChangeClick={changeThemeHandler} themeStatus={themeMode} />

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
        {/* {isPopUpOpen && <AddPopUp handleCLose={openPopUpHandler} />} */}
        {isPopUpOpen && <WordSetPopUp handleCLose={openPopUpHandler} />}

      </Switch>
    </div>
  );
}

export default App;
