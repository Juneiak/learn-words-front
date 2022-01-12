import React from 'react';
import './app.css';
import Header from '../components/header/header';

function App() {
  const [mode, changeMode] = React.useState('light');

  function moduleChange() {
    const changedMode = mode === 'light' ? 'dark' : 'light'
    changeMode(changedMode)
  }

  return (
    <div className="app" site-theme-mode={mode}>
      <Header onModeChangeClick={moduleChange}></Header>
    </div>
  );
}

export default App;
