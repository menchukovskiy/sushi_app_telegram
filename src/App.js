import React, { useEffect } from 'react'
import BottomNavBar from './components/BottomNavBar';
import { BrowserRouter, useLocation } from 'react-router-dom';
import BotRouter from './router'

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollBy(0, 0);
  }, [pathname]);

  return null
}


function App() {
  const tg = window.Telegram.WebApp;

  useEffect(() => {
    tg.expand()
    tg.ready();
  }, [tg])



  return (
    <BrowserRouter>
      <div className='wrap'>
        <BotRouter />
      </div>
      <BottomNavBar />
    </BrowserRouter>
  );
}

export default App;
