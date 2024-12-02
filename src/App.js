import React, { useEffect } from 'react'
import BottomNavBar from './components/BottomNavBar';
import { BrowserRouter, useLocation } from 'react-router-dom';
import BotRouter from './router'
import { useDispatch, useSelector } from 'react-redux';
import { getData } from './store/slice/customerSlice'

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollBy(0, 0);
  }, [pathname]);

  return null
}


function App() {

  //Разкоментить перед build
  
  const tg = window.Telegram.WebApp;

  useEffect(() => {
    tg.expand()
    tg.ready();
  }, [tg])


  const dispatch = useDispatch()
  const store = useSelector( state => state.customer )

  useEffect(() => {
    if (store.status !== 'load') {
      dispatch(getData( tg.initDataUnsafe.user.id  ))
      //dispatch(getData( 315099834  ))
  }
  }, [dispatch])

 
  

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
