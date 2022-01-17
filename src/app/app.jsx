import React from 'react';
import './app.css';
import '../ui/colors.css';
import '../ui/text.css';
import '../ui/standard-patterns.css';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import { MainPage, AboutPage, WordSetsPage } from '../pages/index';
import { Switch, Route } from 'react-router-dom';

function App() {
  const [themeMode, changeThemeMode] = React.useState('light');

  function changeThemeHandler() {
    const changedTheme = themeMode === 'light' ? 'dark' : 'light';
    changeThemeMode(changedTheme);
  };

  return (
    <div className="app colors" data-theme-mode={themeMode}>
      <Header onThemeChangeClick={changeThemeHandler} themeStatus={themeMode}></Header>
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
    </div>
  );
}

export default App;
